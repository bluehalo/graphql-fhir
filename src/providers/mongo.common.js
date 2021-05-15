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
    logRequest(`${resource_name} >>> create`);
    verifyHasValidScopes(resource_name, 'write', resource_incoming.patient); //TODO add scopes req.authInfo && req.authInfo.scope);

    logInfo('--- body ----');
    logInfo(resource_incoming);
    logInfo('-----------------');
    const uuid = getUuid(resource_incoming);

    try {
        // Grab an instance of our DB and collection (by version)
        let collection = db.collection(`${collection_name}_${version}`);

        // Get current record
        let Resource = getResource(version, resource_name);
        logInfo(`Resource: ${Resource}`);
        let resource = new Resource(resource_incoming);
        // noinspection JSUnresolvedFunction
        logInfo(`resource: ${resource.toJSON()}`);

        // If no resource ID was provided, generate one.
        let id = getUuid(resource);
        logInfo(`id: ${id}`);

        // Create the resource's metadata
        /**
         * @type {function({Object}): Meta}
         */
        let Meta = getMeta(version);
        resource.meta = new Meta({
            versionId: '1',
            lastUpdated: moment.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
        });

        // Create the document to be inserted into Mongo
        // noinspection JSUnresolvedFunction
        let doc = JSON.parse(JSON.stringify(resource.toJSON()));
        Object.assign(doc, {id: id});

        // Create a clone of the object without the _id parameter before assigning a value to
        // the _id parameter in the original document
        let history_doc = Object.assign({}, doc);
        Object.assign(doc, {_id: id});

        logInfo('---- inserting doc ---');
        logInfo(doc);
        logInfo('----------------------');

        // Insert our resource record
        try {
            await collection.insertOne(doc);
        } catch (e) {
            // noinspection ExceptionCaughtLocallyJS
            throw new BadRequestError(e);
        }
        // Save the resource to history
        let history_collection = db.collection(`${collection_name}_${version}_History`);

        // Insert our resource record to history but don't assign _id
        await history_collection.insertOne(history_doc);
        return doc;
    } catch (e) {
        logger.error(`Error with merging resource ${resource_name}.merge with id: ${uuid} `, e);
        throw e;
    }
};

/**
 * Always logs regardless of env.IS_PRODUCTION
 * @param {*} msg
 */
 let logRequest = (msg) => {
    logger.info(msg);
};


/**
 * Logs as info if env.IS_PRODUCTION is not set
 * @param {*} msg
 */
 let logInfo = (msg) => {
    if (!env.IS_PRODUCTION) {
        logger.info(msg);
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
