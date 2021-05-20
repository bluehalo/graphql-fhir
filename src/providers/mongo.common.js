const errorUtils = require('../utils/error.utils');
const logger = require('@asymmetrik/node-fhir-server-core').loggers.get();
const {resolveSchema} = require('@asymmetrik/node-fhir-server-core');
const {verifyHasValidScopes} = require('./security');
const {getUuid} = require('./uid');
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
    verifyHasValidScopes(resource_name, 'write', resource_incoming.patient.resource); //TODO add scopes req.authInfo && req.authInfo.scope);
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
 * Gets class for the given resource_name and version
 * @param {string} base_version
 * @param {string} resource_name
 * @returns {function(?Object):Resource}
 */
 let getResource = (base_version, resource_name) => {
    return resolveSchema(base_version, resource_name);
};

/**
 * Gets class for Meta
 * @param {string} base_version
 * @returns {function({Object}):Meta} Meta class
 */
 let getMeta = (base_version) => {
    return resolveSchema(base_version, 'Meta');
};
