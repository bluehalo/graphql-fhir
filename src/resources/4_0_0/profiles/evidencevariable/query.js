// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EvidenceVariableSchema = require('../../schemas/evidencevariable.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EvidenceVariableArgs = require('../../parameters/evidencevariable.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	EvidenceVariableArgs,
);

// Resolvers
const {
	getEvidenceVariable,
	getEvidenceVariableList,
	getEvidenceVariableInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EvidenceVariable',
	action: 'read',
};

/**
 * @name exports.EvidenceVariableQuery
 * @summary EvidenceVariable query.
 */
module.exports.EvidenceVariableQuery = {
	description: 'Query for a single EvidenceVariable',
	resolve: scopeInvariant(scopeOptions, getEvidenceVariable),
	type: EvidenceVariableSchema,
	args: args,
};

/**
 * @name exports.EvidenceVariableListQuery
 * @summary EvidenceVariable query.
 */
module.exports.EvidenceVariableListQuery = {
	description: 'Query for a more than or just one EvidenceVariable',
	resolve: scopeInvariant(scopeOptions, getEvidenceVariableList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EvidenceVariableInstanceQuery
 * @summary EvidenceVariable query.
 */
module.exports.EvidenceVariableInstanceQuery = {
	description: 'Access information about a single EvidenceVariable',
	resolve: scopeInvariant(scopeOptions, getEvidenceVariableInstance),
	type: EvidenceVariableSchema,
	args: args,
};
