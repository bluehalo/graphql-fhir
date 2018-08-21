// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ConsentSchema = require('../../schemas/consent.schema');

// Inputs
const ConsentInput = require('../../inputs/consent.input');

// Resolvers
const {
	consentCreateResolver,
	consentUpdateResolver,
	consentDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Consent',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Consent record.'
	},
	resource: {
		type: new GraphQLNonNull(ConsentInput),
		description: 'Consent Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Consent record for deletion.'
	}
};

/**
 * @name exports.ConsentCreateMutation
 * @summary ConsentCreate Mutation.
 */
module.exports.ConsentCreateMutation = {
	args: WriteArgs,
	description: 'Create a Consent',
	resolve: scopeInvariant(scopeOptions, consentCreateResolver),
	type: ConsentSchema
};

/**
 * @name exports.ConsentUpdateMutation
 * @summary ConsentUpdate Mutation.
 */
module.exports.ConsentUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Consents',
	resolve: scopeInvariant(scopeOptions, consentUpdateResolver),
	type: ConsentSchema
};

/**
 * @name exports.ConsentDeleteMutation
 * @summary ConsentDelete Mutation.
 */
module.exports.ConsentDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Consent',
	resolve: scopeInvariant(scopeOptions, consentDeleteResolver),
	type: ConsentSchema
};
