// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MolecularSequenceSchema = require('../../schemas/molecularsequence.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MolecularSequenceArgs = require('../../parameters/molecularsequence.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MolecularSequenceArgs,
);

// Resolvers
const {
	getMolecularSequence,
	getMolecularSequenceList,
	getMolecularSequenceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MolecularSequence',
	action: 'read',
};

/**
 * @name exports.MolecularSequenceQuery
 * @summary MolecularSequence query.
 */
module.exports.MolecularSequenceQuery = {
	description: 'Query for a single MolecularSequence',
	resolve: scopeInvariant(scopeOptions, getMolecularSequence),
	type: MolecularSequenceSchema,
	args: args,
};

/**
 * @name exports.MolecularSequenceListQuery
 * @summary MolecularSequence query.
 */
module.exports.MolecularSequenceListQuery = {
	description: 'Query for a more than or just one MolecularSequence',
	resolve: scopeInvariant(scopeOptions, getMolecularSequenceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MolecularSequenceInstanceQuery
 * @summary MolecularSequence query.
 */
module.exports.MolecularSequenceInstanceQuery = {
	description: 'Access information about a single MolecularSequence',
	resolve: scopeInvariant(scopeOptions, getMolecularSequenceInstance),
	type: MolecularSequenceSchema,
	args: args,
};
