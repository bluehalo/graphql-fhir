// Schemas
const MedicationSchema = require('../../schemas/medication.schema');

// Arguments
const MedicationArgs = require('../../parameters/medication.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	medicationResolver,
	medicationListResolver,
	medicationInstanceResolver
} = require('./resolver');

/**
 * @name exports.MedicationQuery
 * @summary Medication Query.
 */
module.exports.MedicationQuery = {
	args: Object.assign({}, CommonArgs, MedicationArgs),
	description: 'Query for a single Medication',
	resolve: medicationResolver,
	type: MedicationSchema
};

/**
 * @name exports.MedicationListQuery
 * @summary MedicationList Query.
 */
module.exports.MedicationListQuery = {
	args: Object.assign({}, CommonArgs, MedicationArgs),
	description: 'Query for multiple Medications',
	resolve: medicationListResolver,
	type: new GraphQLList(MedicationSchema)
};

/**
 * @name exports.MedicationInstanceQuery
 * @summary MedicationInstance Query.
 */
module.exports.MedicationInstanceQuery = {
	description: 'Get information about a single Medication',
	resolve: medicationInstanceResolver,
	type: MedicationSchema
};
