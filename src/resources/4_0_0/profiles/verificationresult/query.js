// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const VerificationResultSchema = require('../../schemas/verificationresult.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const VerificationResultArgs = require('../../parameters/verificationresult.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	VerificationResultArgs,
);

// Resolvers
const {
	getVerificationResult,
	getVerificationResultList,
	getVerificationResultInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'VerificationResult',
	action: 'read',
};

/**
 * @name exports.VerificationResultQuery
 * @summary VerificationResult query.
 */
module.exports.VerificationResultQuery = {
	description: 'Query for a single VerificationResult',
	resolve: scopeInvariant(scopeOptions, getVerificationResult),
	type: VerificationResultSchema,
	args: args,
};

/**
 * @name exports.VerificationResultListQuery
 * @summary VerificationResult query.
 */
module.exports.VerificationResultListQuery = {
	description: 'Query for a more than or just one VerificationResult',
	resolve: scopeInvariant(scopeOptions, getVerificationResultList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.VerificationResultInstanceQuery
 * @summary VerificationResult query.
 */
module.exports.VerificationResultInstanceQuery = {
	description: 'Access information about a single VerificationResult',
	resolve: scopeInvariant(scopeOptions, getVerificationResultInstance),
	type: VerificationResultSchema,
	args: args,
};
