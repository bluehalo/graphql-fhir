// Schemas
const ContractSchema = require('../../schemas/contract.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ContractArgs = require('../../parameters/contract.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	contractResolver,
	contractListResolver,
	contractInstanceResolver
} = require('./resolver');

/**
 * @name exports.ContractQuery
 * @summary Contract Query.
 */
module.exports.ContractQuery = {
	args: Object.assign({}, CommonArgs, ContractArgs),
	description: 'Query for a single Contract',
	resolve: contractResolver,
	type: ContractSchema
};

/**
 * @name exports.ContractListQuery
 * @summary ContractList Query.
 */
module.exports.ContractListQuery = {
	args: Object.assign({}, CommonArgs, ContractArgs),
	description: 'Query for multiple Contracts',
	resolve: contractListResolver,
	type: BundleSchema
};

/**
 * @name exports.ContractInstanceQuery
 * @summary ContractInstance Query.
 */
module.exports.ContractInstanceQuery = {
	description: 'Get information about a single Contract',
	resolve: contractInstanceResolver,
	type: ContractSchema
};
