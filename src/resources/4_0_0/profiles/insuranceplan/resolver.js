const { COLLECTION } = require('../../../../constants');
const mongo_provider = require('../../../../providers/mongo.common');
const resource_name = 'InsurancePlan';
const collection_name = COLLECTION.INSURANCEPLAN;

/**
 * @name exports.getInsurancePlan
 * @static
 * @summary InsurancePlan resolver.
 */
module.exports.getInsurancePlan = (root, args, context = {}, info) => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.getInsurancePlanList
 * @static
 * @summary InsurancePlan list resolver.
 */
module.exports.getInsurancePlanList = (root,args, context = {}, info) =>
	mongo_provider.search(args, context, resource_name, collection_name);


/**
 * @name exports.getInsurancePlanInstance
 * @static
 * @summary InsurancePlan instance resolver.
 */
module.exports.getInsurancePlanInstance = (root,args,context = {},info) => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.createInsurancePlan
 * @static
 * @summary Create InsurancePlan resolver.
 */
module.exports.createInsurancePlan = (root, args, context = {}, info) =>
	mongo_provider.create(args, context, resource_name, collection_name);

/**
 * @name exports.updateInsurancePlan
 * @static
 * @summary Update InsurancePlan resolver.
 */
module.exports.updateInsurancePlan = (root, args, context = {}, info) => 
	mongo_provider.update(args, context, resource_name, collection_name);

/**
 * @name exports.removeInsurancePlan
 * @static
 * @summary Remove InsurancePlan resolver.
 */
module.exports.removeInsurancePlan = (root, args, context = {}, info) => 
	mongo_provider.remove(args, context, resource_name, collection_name);
