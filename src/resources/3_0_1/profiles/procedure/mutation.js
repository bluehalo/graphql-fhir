// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProcedureSchema = require('../../schemas/procedure.schema');

// Inputs
const ProcedureInput = require('../../inputs/procedure.input');


const {
	procedureCreateResolver,
	procedureUpdateResolver,
	procedureDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Procedure record.'
	},
	resource: {
		type: ProcedureInput,
		description: 'Procedure Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Procedure record for deletion.'
	}
};

/**
 * @name exports.ProcedureCreateMutation
 * @summary ProcedureCreate Mutation.
 */
module.exports.ProcedureCreateMutation = {
	args: WriteArgs,
	description: 'Create a Procedure',
	resolve: procedureCreateResolver,
	type: ProcedureSchema
};

/**
 * @name exports.ProcedureUpdateMutation
 * @summary ProcedureUpdate Mutation.
 */
module.exports.ProcedureUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Procedures',
	resolve: procedureUpdateResolver,
	type: ProcedureSchema
};

/**
 * @name exports.ProcedureDeleteMutation
 * @summary ProcedureDelete Mutation.
 */
module.exports.ProcedureDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Procedure',
	resolve: procedureDeleteResolver,
	type: ProcedureSchema
};
