// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ConsentSchema = require('../../schemas/consent.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ConsentArgs = require('../../parameters/consent.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, ConsentArgs);

// Resolvers
const {
	getConsent,
	getConsentList,
	getConsentInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Consent',
	action: 'read',
};

/**
 * @name exports.ConsentQuery
 * @summary Consent query.
 */
module.exports.ConsentQuery = {
	description: 'Query for a single Consent',
	resolve: scopeInvariant(scopeOptions, getConsent),
	type: ConsentSchema,
	args: args,
};

/**
 * @name exports.ConsentListQuery
 * @summary Consent query.
 */
module.exports.ConsentListQuery = {
	description: 'Query for a more than or just one Consent',
	resolve: scopeInvariant(scopeOptions, getConsentList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ConsentInstanceQuery
 * @summary Consent query.
 */
module.exports.ConsentInstanceQuery = {
	description: 'Access information about a single Consent',
	resolve: scopeInvariant(scopeOptions, getConsentInstance),
	type: ConsentSchema,
	args: args,
};
