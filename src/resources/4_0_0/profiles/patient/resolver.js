const { COLLECTION } = require('../../../../constants');
const mongo_provider = require('../../../../providers/mongo.common');
const resource_name = 'Patient';
const collection_name = COLLECTION.PATIENT;

/**
 * @name exports.getPatient
 * @static
 * @summary Patient resolver.
 */
module.exports.getPatient = (root, args, context, info) => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.getPatientList
 * @static
 * @summary Patient list resolver.
 */
module.exports.getPatientList = (root, args, context = {}, info) => 
	mongo_provider.search(args, context, resource_name, collection_name);

/**
 * @name exports.getPatientInstance
 * @static
 * @summary Patient instance resolver.
 */
module.exports.getPatientInstance = (root, args, context = {},info)  => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.createPatient
 * @static
 * @summary Create Patient resolver.
 */
module.exports.createPatient = (root, args, context = {}, info) =>
	mongo_provider.create(args, context, resource_name, collection_name);

/**
 * @name exports.updatePatient
 * @static
 * @summary Update Patient resolver.
 */
module.exports.updatePatient = (root, args, context = {}, info) => 
	mongo_provider.update(args, context, resource_name, collection_name);

/**
 * @name exports.removePatient
 * @static
 * @summary Remove Patient resolver.
 */
module.exports.removePatient  = (root,args,context = {},info) => 
	mongo_provider.remove(args, context, resource_name, collection_name);
