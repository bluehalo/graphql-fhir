const errorUtils = require('../../../../utils/error.utils');
/**
 * @name exports.getClaim
 * @static
 * @summary Claim resolver.
 */
module.exports.getClaim = function getClaim(root, args, context, info) {
	let db = context.server.db;
  	let version = context.version;
  	let logger = context.server.logger;
	return new Promise((resolve, reject) => {
		const claims = db.collection("claims");
		let claim = claims.findOne({ _id: args._id }).then(
			(claim)=> {
				if (!claim){
					resolve({});
				}
				else {
					resolve(claim.resource);
				}
			},
			(err)=> {
				logger.error(err);
				let error = errorUtils.internal(version, err.message);
				reject(errorUtils.formatErrorForGraphQL(error));
			}
		);

	  });
};

/**
 * @name exports.getClaimList
 * @static
 * @summary Claim list resolver.
 */
module.exports.getClaimList = function getClaimList(
	root,
	args,
	context = {},
	info,
) {
	let db = context.server.db;
  	let version = context.version;
  	let logger = context.server.logger;
	return new Promise((resolve, reject) => {
		const claims = db.collection("claims");
		claims.find({}).toArray().then(function(result) {
				let b=[];
				result.forEach((res)=> {b.push(res['resource']);});
				resolve(b); //TODO proper mapping
		  }, function(err) {
			logger.error(err);
			let error = errorUtils.internal(version, err.message);
			reject(errorUtils.formatErrorForGraphQL(error));
		  });
	});
};

/**
 * @name exports.getClaimInstance
 * @static
 * @summary Claim instance resolver.
 */
module.exports.getClaimInstance = function getClaimInstance(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.createClaim
 * @static
 * @summary Create Claim resolver.
 */
module.exports.createClaim = function createClaim(
	root,
	args,
	context = {},
	info,
) {
	let db = context.server.db;
  	let version = context.version;
  	let logger = context.server.logger;
	return new Promise((resolve, reject) => { //TODO mapping incomplete probably not the best way either
		const claim = args.resource;
		const claims = db.collection("claims");
		claims.insertOne({_id: args.id, resource: claim}, (err, result) => {
			if (err) {
			  logger.error(err);
			  let error = errorUtils.internal(version, err.message);
			  reject(errorUtils.formatErrorForGraphQL(error));
			} else {
				resolve(args.resource);
			}
		  });
	});
};

/**
 * @name exports.updateClaim
 * @static
 * @summary Update Claim resolver.
 */
module.exports.updateClaim = function updateClaim(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};

/**
 * @name exports.removeClaim
 * @static
 * @summary Remove Claim resolver.
 */
module.exports.removeClaim = function removeClaim(
	root,
	args,
	context = {},
	info,
) {
	let { server, version, req, res } = context;
	return {};
};
