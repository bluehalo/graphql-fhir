const { COLLECTION } = require('../../../../constants');
const mongo_provider = require('../../../../providers/mongo.common');
const resource_name = 'Claim';
const collection_name = COLLECTION.CLAIM;
/**
 * @name exports.getClaim
 * @static
 * @summary Claim resolver.
 */
module.exports.getClaim = (root, args, context, info) => 
	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.getClaimList
 * @static
 * @summary Claim list resolver.
 */
module.exports.getClaimList = (root, args, context = {}, info) => 
	mongo_provider.search(args, context, resource_name, collection_name);

/**
 * @name exports.getClaimInstance
 * @static
 * @summary Claim instance resolver.
 */
 module.exports.getClaimInstance = (root, args, context = {},info)  => 
 	mongo_provider.searchById(args, context, resource_name, collection_name);

/**
 * @name exports.createClaim
 * @static
 * @summary Create Claim resolver.
 */
module.exports.createClaim = (root,args,context = {},info) => 
	mongo_provider.create(args, context, resource_name, collection_name);
	
/**
 * @name exports.updateClaim
 * @static
 * @summary Update Claim resolver.
 */
module.exports.updateClaim = (root,args,context = {},info,) => 
	mongo_provider.update(args, context, resource_name, collection_name);

/**
 * @name exports.removeClaim
 * @static
 * @summary Remove Claim resolver.
 */
module.exports.removeClaim = (root,args,context = {},info) => 
	mongo_provider.remove(args, context, resource_name, collection_name);
