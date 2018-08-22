// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImplementationGuideSchema = require('../../schemas/implementationguide.schema');

// Inputs
const ImplementationGuideInput = require('../../inputs/implementationguide.input');

// Resolvers
const {
	implementationguideCreateResolver,
	implementationguideUpdateResolver,
	implementationguideDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ImplementationGuide',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ImplementationGuide record.'
	},
	resource: {
		type: new GraphQLNonNull(ImplementationGuideInput),
		description: 'ImplementationGuide Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ImplementationGuide record for deletion.'
	}
};

/**
 * @name exports.ImplementationGuideCreateMutation
 * @summary ImplementationGuideCreate Mutation.
 */
module.exports.ImplementationGuideCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImplementationGuide',
	resolve: scopeInvariant(scopeOptions, implementationguideCreateResolver),
	type: ImplementationGuideSchema
};

/**
 * @name exports.ImplementationGuideUpdateMutation
 * @summary ImplementationGuideUpdate Mutation.
 */
module.exports.ImplementationGuideUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImplementationGuides',
	resolve: scopeInvariant(scopeOptions, implementationguideUpdateResolver),
	type: ImplementationGuideSchema
};

/**
 * @name exports.ImplementationGuideDeleteMutation
 * @summary ImplementationGuideDelete Mutation.
 */
module.exports.ImplementationGuideDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImplementationGuide',
	resolve: scopeInvariant(scopeOptions, implementationguideDeleteResolver),
	type: ImplementationGuideSchema
};
