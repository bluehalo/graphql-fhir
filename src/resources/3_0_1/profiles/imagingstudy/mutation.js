// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImagingStudySchema = require('../../schemas/imagingstudy.schema');

// Inputs
const ImagingStudyInput = require('../../inputs/imagingstudy.input');

// Resolvers
const {
	imagingstudyCreateResolver,
	imagingstudyUpdateResolver,
	imagingstudyDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ImagingStudy',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a ImagingStudy record.',
	},
	resource: {
		type: new GraphQLNonNull(ImagingStudyInput),
		description: 'ImagingStudy Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a ImagingStudy record for deletion.',
	},
};

/**
 * @name exports.ImagingStudyCreateMutation
 * @summary ImagingStudyCreate Mutation.
 */
module.exports.ImagingStudyCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImagingStudy',
	resolve: scopeInvariant(scopeOptions, imagingstudyCreateResolver),
	type: ImagingStudySchema,
};

/**
 * @name exports.ImagingStudyUpdateMutation
 * @summary ImagingStudyUpdate Mutation.
 */
module.exports.ImagingStudyUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImagingStudys',
	resolve: scopeInvariant(scopeOptions, imagingstudyUpdateResolver),
	type: ImagingStudySchema,
};

/**
 * @name exports.ImagingStudyDeleteMutation
 * @summary ImagingStudyDelete Mutation.
 */
module.exports.ImagingStudyDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImagingStudy',
	resolve: scopeInvariant(scopeOptions, imagingstudyDeleteResolver),
	type: ImagingStudySchema,
};
