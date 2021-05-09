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
		claims.findOne({ _id: args._id }, (err, claim) => {
		  if (err) {
			logger.error(err);
			let error = errorUtils.internal(version, err.message);
			reject(errorUtils.formatErrorForGraphQL(error));
		  } else {
			resolve(claim.resource);
		  }
		});
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
		claims.find({}).toArray(function(err, result) {
			if (err) {
			logger.error(err);
			let error = errorUtils.internal(version, err.message);
			reject(errorUtils.formatErrorForGraphQL(error));
			} else {
				const claimArray = result.map(c => {
					let res = c.resource;
					res.resourceType = "Claim";
					let entry = {
						id: res.id,
						resource: res
					}
					return entry});
				const returnValue = {
					type: "Claim",
					total: result.length,
					entry: claimArray
				};
				resolve(returnValue); //TODO proper mapping
			}
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
	let db = context.server.db;
  	let version = context.version;
  	let logger = context.server.logger;
	return new Promise((resolve, reject) => {
		const claims = db.collection("claims");
		claims.findOne({ _id: args._id }, (err, claim) => {
		  if (err) {
			logger.error(err);
			let error = errorUtils.internal(version, err.message);
			reject(errorUtils.formatErrorForGraphQL(error));
		  } else {
			resolve(claim.resource);
		  }
		});
	  });
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
	return new Promise((resolve, reject) => {
		const claim = args.resource;
		const claims = db.collection("claims");
		claims.updateOne({_id: args.id, resource: claim}, (err, result) => {
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
	let db = context.server.db;
  	let version = context.version;
  	let logger = context.server.logger;
	return new Promise((resolve, reject) => {
		const claim = args.resource;
		const claims = db.collection("claims");
		claims.updateOne({_id: args.id}, 
			{ $set: {claim}}, 
			{ upsert:true }, (err, result) => {
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
	let db = context.server.db;
  	let version = context.version;
  	let logger = context.server.logger;
	return new Promise((resolve, reject) => {
		const claims = db.collection("claims");
		claims.deleteOne({_id: args.id}, (err) => {
			if (err) {
			  logger.error(err);
			  let error = errorUtils.internal(version, err.message);
			  reject(errorUtils.formatErrorForGraphQL(error));
			} else {
				resolve ( {id: args.id});
			}
		  });
	});
};
