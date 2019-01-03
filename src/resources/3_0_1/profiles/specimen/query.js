// Schemas
const SpecimenSchema = require('../../schemas/specimen.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SpecimenArgs = require('../../parameters/specimen.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	specimenResolver,
	specimenListResolver,
	specimenInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Specimen',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.SpecimenQuery
 * @summary Specimen Query.
 */
module.exports.SpecimenQuery = {
	args: Object.assign({}, CommonArgs, SpecimenArgs),
	description: 'Query for a single Specimen',
	resolve: scopeInvariant(scopeOptions, specimenResolver),
	type: SpecimenSchema,
};

/**
 * @name exports.SpecimenListQuery
 * @summary SpecimenList Query.
 */
module.exports.SpecimenListQuery = {
	args: Object.assign({}, CommonArgs, SpecimenArgs),
	description: 'Query for multiple Specimens',
	resolve: scopeInvariant(scopeOptions, specimenListResolver),
	type: BundleSchema,
};

/**
 * @name exports.SpecimenInstanceQuery
 * @summary SpecimenInstance Query.
 */
module.exports.SpecimenInstanceQuery = {
	description: 'Get information about a single Specimen',
	resolve: scopeInvariant(scopeOptions, specimenInstanceResolver),
	type: SpecimenSchema,
};
