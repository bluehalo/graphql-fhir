// Schemas
const MedicationDispenseSchema = require('../../schemas/medicationdispense.schema');

// Arguments
const MedicationDispenseArgs = require('../../parameters/medicationdispense.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	medicationdispenseResolver,
	medicationdispenseListResolver,
	medicationdispenseInstanceResolver
} = require('./resolver');

/**
 * @name exports.MedicationDispenseQuery
 * @summary MedicationDispense Query.
 */
module.exports.MedicationDispenseQuery = {
	args: Object.assign({}, CommonArgs, MedicationDispenseArgs),
	description: 'Query for a single MedicationDispense',
	resolve: medicationdispenseResolver,
	type: MedicationDispenseSchema
};

/**
 * @name exports.MedicationDispenseListQuery
 * @summary MedicationDispenseList Query.
 */
module.exports.MedicationDispenseListQuery = {
	args: Object.assign({}, CommonArgs, MedicationDispenseArgs),
	description: 'Query for multiple MedicationDispenses',
	resolve: medicationdispenseListResolver,
	type: new GraphQLList(MedicationDispenseSchema)
};

/**
 * @name exports.MedicationDispenseInstanceQuery
 * @summary MedicationDispenseInstance Query.
 */
module.exports.MedicationDispenseInstanceQuery = {
	description: 'Get information about a single MedicationDispense',
	resolve: medicationdispenseInstanceResolver,
	type: MedicationDispenseSchema
};
