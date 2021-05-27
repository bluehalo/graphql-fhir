const { COLLECTION } = require('../../../../constants');
const mongo_provider = require('../../../../providers/mongo.common');
const resource_name = 'ExplanationOfBenefit';
const collection_name = COLLECTION.EXPLANATIONOFBENEFIT;

/**
 * @name exports.getExplanationOfBenefit
 * @static
 * @summary ExplanationOfBenefit resolver.
 */
module.exports.getExplanationOfBenefit = (root, args, context, info) => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.getExplanationOfBenefitList
 * @static
 * @summary ExplanationOfBenefit list resolver.
 */
module.exports.getExplanationOfBenefitList = (root, args, context = {}, info) => 
	mongo_provider.search(args, context, resource_name, collection_name);

/**
 * @name exports.getExplanationOfBenefitInstance
 * @static
 * @summary ExplanationOfBenefit instance resolver.
 */
module.exports.getExplanationOfBenefitInstance = (root, args, context = {},info)  => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.createExplanationOfBenefit
 * @static
 * @summary Create ExplanationOfBenefit resolver.
 */
module.exports.createExplanationOfBenefit = (root,args,context = {},info) => 
mongo_provider.create(args, context, resource_name, collection_name);

/**
 * @name exports.updateExplanationOfBenefit
 * @static
 * @summary Update ExplanationOfBenefit resolver.
 */
module.exports.updateExplanationOfBenefit = (root,args,context = {},info,) => 
	mongo_provider.update(args, context, resource_name, collection_name);

/**
 * @name exports.removeExplanationOfBenefit
 * @static
 * @summary Remove ExplanationOfBenefit resolver.
 */
module.exports.removeExplanationOfBenefit = (root,args,context = {},info) => 
	mongo_provider.remove(args, context, resource_name, collection_name);
