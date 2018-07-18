// Schemas
const SpecimenSchema = require('../../schemas/specimen.schema');

// Arguments
const SpecimenArgs = require('../../parameters/specimen.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	specimenResolver,
	specimenListResolver,
	specimenInstanceResolver
} = require('./resolver');

/**
 * @name exports.SpecimenQuery
 * @summary Specimen Query.
 */
module.exports.SpecimenQuery = {
	args: Object.assign({}, CommonArgs, SpecimenArgs),
	description: 'Query for a single Specimen',
	resolve: specimenResolver,
	type: SpecimenSchema
};

/**
 * @name exports.SpecimenListQuery
 * @summary SpecimenList Query.
 */
module.exports.SpecimenListQuery = {
	args: Object.assign({}, CommonArgs, SpecimenArgs),
	description: 'Query for multiple Specimens',
	resolve: specimenListResolver,
	type: new GraphQLList(SpecimenSchema)
};

/**
 * @name exports.SpecimenInstanceQuery
 * @summary SpecimenInstance Query.
 */
module.exports.SpecimenInstanceQuery = {
	description: 'Get information about a single Specimen',
	resolve: specimenInstanceResolver,
	type: SpecimenSchema
};
