const { COLLECTION } = require('../../../../constants');
const mongo_provider = require('../../../../providers/mongo.common');
const resource_name = 'ClaimResponse';
const collection_name = COLLECTION.CLAIMRESPONSE;
/**
 * @name exports.getClaimResponse
 * @static
 * @summary ClaimResponse resolver.
 */
module.exports.getClaimResponse = (root, args, context, info) => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.getClaimResponseList
 * @static
 * @summary ClaimResponse list resolver.
 */
module.exports.getClaimResponseList = (root, args, context = {}, info) => 
	mongo_provider.search(args, context, resource_name, collection_name);
/**
 * @name exports.getClaimResponseInstance
 * @static
 * @summary ClaimResponse instance resolver.
 */
module.exports.getClaimResponseInstance = (root, args, context = {},info)  => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.createClaimResponse
 * @static
 * @summary Create ClaimResponse resolver.
 */
module.exports.createClaimResponse = (root,args,context = {},info) => 
	mongo_provider.create(args, context, resource_name, collection_name);

/**
 * @name exports.updateClaimResponse
 * @static
 * @summary Update ClaimResponse resolver.
 */
module.exports.updateClaimResponse = (root,args,context = {},info,) => 
	mongo_provider.update(args, context, resource_name, collection_name);

/**
 * @name exports.removeClaimResponse
 * @static
 * @summary Remove ClaimResponse resolver.
 */
module.exports.removeClaimResponse = (root,args,context = {},info) => 
	mongo_provider.remove(args, context, resource_name, collection_name);
