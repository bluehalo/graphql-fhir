// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SpecimenSchema = require('../../schemas/specimen.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SpecimenArgs = require('../../parameters/specimen.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, SpecimenArgs);

// Resolvers
const {
	getSpecimen,
	getSpecimenList,
	getSpecimenInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Specimen',
	action: 'read',
};

/**
 * @name exports.SpecimenQuery
 * @summary Specimen query.
 */
module.exports.SpecimenQuery = {
	description: 'Query for a single Specimen',
	resolve: scopeInvariant(scopeOptions, getSpecimen),
	type: SpecimenSchema,
	args: args,
};

/**
 * @name exports.SpecimenListQuery
 * @summary Specimen query.
 */
module.exports.SpecimenListQuery = {
	description: 'Query for a more than or just one Specimen',
	resolve: scopeInvariant(scopeOptions, getSpecimenList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SpecimenInstanceQuery
 * @summary Specimen query.
 */
module.exports.SpecimenInstanceQuery = {
	description: 'Access information about a single Specimen',
	resolve: scopeInvariant(scopeOptions, getSpecimenInstance),
	type: SpecimenSchema,
	args: args,
};
