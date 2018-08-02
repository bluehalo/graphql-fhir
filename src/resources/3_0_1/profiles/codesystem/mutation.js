// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CodeSystemSchema = require('../../schemas/codesystem.schema');

// Inputs
const CodeSystemInput = require('../../inputs/codesystem.input');


const {
	codesystemCreateResolver,
	codesystemUpdateResolver,
	codesystemDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CodeSystem record.'
	},
	resource: {
		type: CodeSystemInput,
		description: 'CodeSystem Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a CodeSystem record for deletion.'
	}
};

/**
 * @name exports.CodeSystemCreateMutation
 * @summary CodeSystemCreate Mutation.
 */
module.exports.CodeSystemCreateMutation = {
	args: WriteArgs,
	description: 'Create a CodeSystem',
	resolve: codesystemCreateResolver,
	type: CodeSystemSchema
};

/**
 * @name exports.CodeSystemUpdateMutation
 * @summary CodeSystemUpdate Mutation.
 */
module.exports.CodeSystemUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CodeSystems',
	resolve: codesystemUpdateResolver,
	type: CodeSystemSchema
};

/**
 * @name exports.CodeSystemDeleteMutation
 * @summary CodeSystemDelete Mutation.
 */
module.exports.CodeSystemDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CodeSystem',
	resolve: codesystemDeleteResolver,
	type: CodeSystemSchema
};
