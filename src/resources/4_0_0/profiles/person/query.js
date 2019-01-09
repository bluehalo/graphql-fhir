// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const PersonSchema = require('../../schemas/person.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const PersonArgs = require('../../parameters/person.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, PersonArgs);

// Resolvers
const { getPerson, getPersonList, getPersonInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Person',
	action: 'read',
};

/**
 * @name exports.PersonQuery
 * @summary Person query.
 */
module.exports.PersonQuery = {
	description: 'Query for a single Person',
	resolve: scopeInvariant(scopeOptions, getPerson),
	type: PersonSchema,
	args: args,
};

/**
 * @name exports.PersonListQuery
 * @summary Person query.
 */
module.exports.PersonListQuery = {
	description: 'Query for a more than or just one Person',
	resolve: scopeInvariant(scopeOptions, getPersonList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.PersonInstanceQuery
 * @summary Person query.
 */
module.exports.PersonInstanceQuery = {
	description: 'Access information about a single Person',
	resolve: scopeInvariant(scopeOptions, getPersonInstance),
	type: PersonSchema,
	args: args,
};
