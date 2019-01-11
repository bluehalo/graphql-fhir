// Schemas
const ConsentSchema = require('../../schemas/consent.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ConsentInput = require('../../inputs/consent.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createConsent, updateConsent, removeConsent } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Consent',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Consent record.',
	},
	resource: {
		type: new GraphQLNonNull(ConsentInput),
		description: 'Consent Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Consent record for deletion.',
	},
};

/**
 * @name exports.ConsentCreateMutation
 * @summary ConsentCreate mutation.
 */
module.exports.ConsentCreateMutation = {
	description: 'Create a Consent record',
	resolve: scopeInvariant(scopeOptions, createConsent),
	type: ConsentSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConsentUpdateMutation
 * @summary ConsentUpdate mutation.
 */
module.exports.ConsentUpdateMutation = {
	description: 'Update a Consent record',
	resolve: scopeInvariant(scopeOptions, updateConsent),
	type: ConsentSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConsentRemoveMutation
 * @summary ConsentRemove mutation.
 */
module.exports.ConsentRemoveMutation = {
	description: 'Remove a Consent record',
	resolve: scopeInvariant(scopeOptions, removeConsent),
	type: ConsentSchema,
	args: DeleteArgs,
};
