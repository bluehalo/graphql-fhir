const {VERSIONS} = require('@asymmetrik/node-fhir-server-core').constants;
const logger = require('@asymmetrik/node-fhir-server-core').loggers.get();
const {resolveSchema} = require('@asymmetrik/node-fhir-server-core');
const {verifyHasValidScopes} = require('./security');
const {getUuid} = require('./uid');
const {applyPatch, compare} = require('fast-json-patch');
const deepEqual = require('fast-deep-equal');
const {buildDstu2SearchQuery, buildStu3SearchQuery, buildR4SearchQuery} = require('./query.builder');
const errorUtils = require('../utils/error.utils');
const moment = require('moment-timezone');
const async = require('async');
const env = require('var');

/**
 * does a FHIR Create (POST)
 * @param {string[]} args
 * @param {IncomingMessage} req
 * @param {string} resource_name
 * @param {string} collection_name
 */
 module.exports.create = async (args, context, resource_name, collection_name) => {
    const db = context.server.db;
  	const version = context.version;
    let resource_incoming = args.resource;
    verifyHasValidScopes(resource_name, 'write', resource_incoming.id); //TODO add scopes req.authInfo && req.authInfo.scope);
    const uuid = getUuid(resource_incoming);

    try {
        // Grab an instance of our DB and collection (by version)
        let collection = db.collection(`${collection_name}_${version}`);
        // Get current record
        let Resource = getResource(version, resource_name);
        let resource = new Resource(resource_incoming);
        // If no resource ID was provided, generate one.
        let id = getUuid(resource);
        // Create the resource's metadata
        let Meta = getMeta(version);
        resource.meta = new Meta({
            versionId: '1',
            lastUpdated: moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
        });
        // Create the document to be inserted into Mongo
        let doc = JSON.parse(JSON.stringify(resource.toJSON()));
        Object.assign(doc, {id: id});
        // Create a clone of the object without the _id parameter before assigning a value to
        // the _id parameter in the original document
        let history_doc = Object.assign({}, doc);
        Object.assign(doc, {_id: id});
        // Insert our resource record
        try {
            await collection.insertOne(doc);
        } catch (e) {
            // noinspection ExceptionCaughtLocallyJS
            let error = errorUtils.internal(version, e.message);
		    return errorUtils.formatErrorForGraphQL(error);
        }
        // Save the resource to history
        let history_collection = db.collection(`${collection_name}_${version}_History`);
        // Insert our resource record to history but don't assign _id
        await history_collection.insertOne(history_doc);
        return doc;
    } catch (e) {
        logger.error(`Error with creating resource ${resource_name}.create with id: ${uuid} `, e);
        throw e;
    }
};

/**
 * does a FHIR Search By Id
 * @param {string[]} args
 * @param {IncomingMessage} req
 * @param {string} resource_name
 * @param {string} collection_name
 */
// eslint-disable-next-line no-unused-vars
module.exports.searchById = async (args, context, resource_name, collection_name) => {
    const db = context.server.db;
  	const version = context.version;
    let id = args._id;
    verifyHasValidScopes(resource_name, 'read', id);//TODO fix scopes, req.authInfo && req.authInfo.scope);
    let collection = db.collection(`${collection_name}_${version}`);
    let Resource = getResource(version, resource_name);
    let resource;
    try {
        resource = await collection.findOne({_id: id});
    } catch (e) {
        let error = errorUtils.internal(version, e.message);
		return errorUtils.formatErrorForGraphQL(error);
    }
    if (resource) {
        return new Resource(resource);
    } else {
        return errorUtils.formatErrorForGraphQL(`${id} does not resolve to a valid value`);
    }
};

/**
 * does a FHIR Search
 * @param {string[]} args
 * @param {IncomingMessage} req
 * @param {string} resource_name
 * @param {string} collection_name
 * @return {Resource[] | Resource} array of resources
 */
 module.exports.search = async (args, context, resource_name, collection_name) => {
    try{
        if(args._query){
            const parsed_args = JSON.parse(args._query);
            if(parsed_args){
                args = {
                    ...args,
                    ...parsed_args
                };
            }
        }
    
        const db = context.server.db;
        const version = context.version;
        verifyHasValidScopes(resource_name, 'read', version, "user/*.* patient/*.*");//TODO fix user id and scopes, req.authInfo && req.authInfo.scope);
    } catch(e){   
        let error = errorUtils.internal(version, e.message);
		return errorUtils.formatErrorForGraphQL(error);
    }
    let query;
    if (version === VERSIONS['3_0_1']) {
        query = buildStu3SearchQuery(args);
    } else if (version === VERSIONS['1_0_2']) {
        query = buildDstu2SearchQuery(args);
    } else {
        query = buildR4SearchQuery(resource_name, args);
    }
    let collection = db.collection(`${collection_name}_${version}`);
    let Resource = getResource(version, resource_name);
    let options = {};
    const maxMongoTimeMS = 30 * 1000;
    let cursor = await collection.find(query, options).maxTimeMS(maxMongoTimeMS);
    if (args['_count']) {
        cursor = cursor.sort({'_id': 1});
        const nPerPage = Number(args['_count']);
        if (args['_getpagesoffset']) {
            const pageNumber = Number(args['_getpagesoffset']);
            cursor = cursor.skip(pageNumber > 0 ? (pageNumber * nPerPage) : 0);
        }
        cursor = cursor.limit(nPerPage);
    } else {
        if (!args['id'] && !args['_elements']) {
            // set a limit so the server does not come down due to volume of data
            cursor = cursor.limit(10);
        }
    }
    const resources = [];
    while (await cursor.hasNext()) {
        const element = await cursor.next();
        if (args['_elements']) {
            const properties_to_return_as_csv = args['_elements'];
            const properties_to_return_list = properties_to_return_as_csv.split(',');
            const element_to_return = new Resource(null);
            for (const property of properties_to_return_list) {
                if (property in element_to_return) {
                    element_to_return[`${property}`] = element[`${property}`];
                }
            }
            resources.push(element_to_return);
        } else {
            resources.push(new Resource(element));
        }
    }
    const Bundle = getResource(version, 'bundle'); 
    const entries = resources.map(resource => {
        return {resource: resource};
    });
    return new Bundle({
        type: 'searchset',
        timestamp: moment.utc().format('YYYY-MM-DDThh:mm:ss.sss') + 'Z',
        entry: entries,
        total: entries.length
    });
};

/**
 * does a FHIR Update (PUT)
 * @param {string[]} args
 * @param {IncomingMessage} req
 * @param {string} resource_name
 * @param {string} collection_name
 */
 module.exports.update = async (args, context, resource_name, collection_name) => {
    const db = context.server.db;
    const version = context.version;
    const resource_incoming = args.resource;
    verifyHasValidScopes(resource_name, 'write', resource_incoming.id); //TODO add scopes req.authInfo && req.authInfo.scope);
    const id = args.id;

    try {
        let collection = db.collection(`${collection_name}_${version}`);
        // Get current record
        const data = await collection.findOne({id: id.toString()});
        // create a resource with incoming data
        let Resource = getResource(version, resource_name);
        let cleaned;
        let doc;

        // check if resource was found in database or not
        // noinspection JSUnresolvedVariable
        if (data && data.meta) {
            // found an existing resource
            let foundResource = new Resource(data);

            // use metadata of existing resource (overwrite any passed in metadata)
            resource_incoming.meta = foundResource.meta;

            // now create a patch between the document in db and the incoming document
            //  this returns an array of patches
            let patchContent = compare(data, resource_incoming);
            // ignore any changes to _id since that's an internal field
            patchContent = patchContent.filter(item => item.path !== '/_id');
            // see if there are any changes
            if (patchContent.length === 0) {
                logInfo('No changes detected in updated resource');
                return {
                    id: id,
                    created: false,
                    resource_version: foundResource.meta.versionId,
                };
            }
            // now apply the patches to the found resource
            let patched_incoming_data = applyPatch(data, patchContent).newDocument;
            let patched_resource_incoming = new Resource(patched_incoming_data);
            let meta = foundResource.meta;
            meta.versionId = `${parseInt(foundResource.meta.versionId) + 1}`;
            meta.lastUpdated = moment.utc().format('YYYY-MM-DDTHH:mm:ssZ');
            patched_resource_incoming.meta = meta;
            cleaned = JSON.parse(JSON.stringify(patched_resource_incoming));
            doc = Object.assign(cleaned, {_id: id});
            check_fhir_mismatch(cleaned, patched_incoming_data);
        } else {
            // not found so insert
            // create the metadata
            let Meta = getMeta(version);
            resource_incoming.meta = new Meta({
                versionId: '1',
                lastUpdated: moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
            });
            cleaned = JSON.parse(JSON.stringify(resource_incoming));
            doc = Object.assign(cleaned, {_id: id});
        }

        // Insert/update our resource record
        // When using the $set operator, only the specified fields are updated
        const res = await collection.findOneAndUpdate({id: id}, {$set: doc}, {upsert: true});
        // save to history
        let history_collection = db.collection(`${collection_name}_${version}_History`);
        let history_resource = Object.assign(cleaned, {_id: id + cleaned.meta.versionId});
        await history_collection.insertOne(history_resource);

        return {
            id: id,
            created: res.lastErrorObject && !res.lastErrorObject.updatedExisting,
            resource_version: doc.meta.versionId,
        };
    } catch (e) {
        let error = errorUtils.internal(version, e.message);
		return errorUtils.formatErrorForGraphQL(error);
    }
};

/**
 * does a FHIR Remove (DELETE)
 * @param {string[]} args
 * @param {IncomingMessage} req
 * @param {string} resource_name
 * @param {string} collection_name
 */
// eslint-disable-next-line no-unused-vars
module.exports.remove = async (args, context, resource_name, collection_name) => {
    const db = context.server.db;
    const version = context.version;
    const id = args.id;
    verifyHasValidScopes(resource_name, 'write', id)//;, req.authInfo && req.authInfo.scope);
    let collection = db.collection(`${collection_name}_${version}`);
    // Delete our resource record
    let res;
    try {
        res = await collection.deleteOne({id: id});
    } catch (e) {
        let error = errorUtils.internal(version, e.message);
		return errorUtils.formatErrorForGraphQL(error);
    }
    // delete history as well.  You can chose to save history.  Up to you
    let history_collection = db.collection(`${collection_name}_${version}_History`);
    try {
        await history_collection.deleteMany({id: id});
    } catch (e) {
        let error = errorUtils.internal(version, e.message);
		return errorUtils.formatErrorForGraphQL(error);
    }
    return {id: id};
};

/**
 * Gets class for the given resource_name and version
 * @param {string} version
 * @param {string} resource_name
 * @returns {function(?Object):Resource}
 */
 let getResource = (version, resource_name) => {
    return resolveSchema(version, resource_name);
};

/**
 * Gets class for Meta
 * @param {string} version
 * @returns {function({Object}):Meta} Meta class
 */
 let getMeta = (version) => {
    return resolveSchema(version, 'Meta');
};

let check_fhir_mismatch = (cleaned, patched) => {
    if (deepEqual(cleaned, patched) === false) {
        let diff = compare(cleaned, patched);
        logger.warn('Possible FHIR mismatch - ' + cleaned.resourceType + cleaned.id + ':' + cleaned.resourceType);
        logger.warn(diff);
    }
};
