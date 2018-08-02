// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const HealthcareServiceSchema = require('../../schemas/healthcareservice.schema');

// Inputs
const HealthcareServiceInput = require('../../inputs/healthcareservice.input');


const {
	healthcareserviceCreateResolver,
	healthcareserviceUpdateResolver,
	healthcareserviceDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a HealthcareService record.'
	},
	resource: {
		type: HealthcareServiceInput,
		description: 'HealthcareService Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a HealthcareService record for deletion.'
	}
};

/**
 * @name exports.HealthcareServiceCreateMutation
 * @summary HealthcareServiceCreate Mutation.
 */
module.exports.HealthcareServiceCreateMutation = {
	args: WriteArgs,
	description: 'Create a HealthcareService',
	resolve: healthcareserviceCreateResolver,
	type: HealthcareServiceSchema
};

/**
 * @name exports.HealthcareServiceUpdateMutation
 * @summary HealthcareServiceUpdate Mutation.
 */
module.exports.HealthcareServiceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple HealthcareServices',
	resolve: healthcareserviceUpdateResolver,
	type: HealthcareServiceSchema
};

/**
 * @name exports.HealthcareServiceDeleteMutation
 * @summary HealthcareServiceDelete Mutation.
 */
module.exports.HealthcareServiceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single HealthcareService',
	resolve: healthcareserviceDeleteResolver,
	type: HealthcareServiceSchema
};
