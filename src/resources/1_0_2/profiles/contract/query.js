// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ContractSchema = require('../../schemas/contract.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ContractArgs = require('../../parameters/contract.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ContractArgs);

// Resolvers
const {
	getContract,
	getContractList,
	getContractInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Contract',
	action: 'read',
};

/**
 * @name exports.ContractQuery
 * @summary Contract query.
 */
module.exports.ContractQuery = {
	description: 'Query for a single Contract',
	resolve: scopeInvariant(scopeOptions, getContract),
	type: ContractSchema,
	args: args,
};

/**
 * @name exports.ContractListQuery
 * @summary Contract query.
 */
module.exports.ContractListQuery = {
	description: 'Query for a more than or just one Contract',
	resolve: scopeInvariant(scopeOptions, getContractList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ContractInstanceQuery
 * @summary Contract query.
 */
module.exports.ContractInstanceQuery = {
	description: 'Access information about a single Contract',
	resolve: scopeInvariant(scopeOptions, getContractInstance),
	type: ContractSchema,
	args: args,
};
