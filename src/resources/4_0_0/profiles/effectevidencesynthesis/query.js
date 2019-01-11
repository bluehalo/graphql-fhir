// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EffectEvidenceSynthesisSchema = require('../../schemas/effectevidencesynthesis.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EffectEvidenceSynthesisArgs = require('../../parameters/effectevidencesynthesis.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	EffectEvidenceSynthesisArgs,
);

// Resolvers
const {
	getEffectEvidenceSynthesis,
	getEffectEvidenceSynthesisList,
	getEffectEvidenceSynthesisInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EffectEvidenceSynthesis',
	action: 'read',
};

/**
 * @name exports.EffectEvidenceSynthesisQuery
 * @summary EffectEvidenceSynthesis query.
 */
module.exports.EffectEvidenceSynthesisQuery = {
	description: 'Query for a single EffectEvidenceSynthesis',
	resolve: scopeInvariant(scopeOptions, getEffectEvidenceSynthesis),
	type: EffectEvidenceSynthesisSchema,
	args: args,
};

/**
 * @name exports.EffectEvidenceSynthesisListQuery
 * @summary EffectEvidenceSynthesis query.
 */
module.exports.EffectEvidenceSynthesisListQuery = {
	description: 'Query for a more than or just one EffectEvidenceSynthesis',
	resolve: scopeInvariant(scopeOptions, getEffectEvidenceSynthesisList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EffectEvidenceSynthesisInstanceQuery
 * @summary EffectEvidenceSynthesis query.
 */
module.exports.EffectEvidenceSynthesisInstanceQuery = {
	description: 'Access information about a single EffectEvidenceSynthesis',
	resolve: scopeInvariant(scopeOptions, getEffectEvidenceSynthesisInstance),
	type: EffectEvidenceSynthesisSchema,
	args: args,
};
