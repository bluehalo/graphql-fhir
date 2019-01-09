// Schemas
const PaymentReconciliationSchema = require('../../schemas/paymentreconciliation.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const PaymentReconciliationInput = require('../../inputs/paymentreconciliation.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createPaymentReconciliation,
	updatePaymentReconciliation,
	removePaymentReconciliation,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PaymentReconciliation',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a PaymentReconciliation record.',
	},
	resource: {
		type: new GraphQLNonNull(PaymentReconciliationInput),
		description: 'PaymentReconciliation Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a PaymentReconciliation record for deletion.',
	},
};

/**
 * @name exports.PaymentReconciliationCreateMutation
 * @summary PaymentReconciliationCreate mutation.
 */
module.exports.PaymentReconciliationCreateMutation = {
	description: 'Create a PaymentReconciliation record',
	resolve: scopeInvariant(scopeOptions, createPaymentReconciliation),
	type: PaymentReconciliationSchema,
	args: WriteArgs,
};

/**
 * @name exports.PaymentReconciliationUpdateMutation
 * @summary PaymentReconciliationUpdate mutation.
 */
module.exports.PaymentReconciliationUpdateMutation = {
	description: 'Update a PaymentReconciliation record',
	resolve: scopeInvariant(scopeOptions, updatePaymentReconciliation),
	type: PaymentReconciliationSchema,
	args: WriteArgs,
};

/**
 * @name exports.PaymentReconciliationRemoveMutation
 * @summary PaymentReconciliationRemove mutation.
 */
module.exports.PaymentReconciliationRemoveMutation = {
	description: 'Remove a PaymentReconciliation record',
	resolve: scopeInvariant(scopeOptions, removePaymentReconciliation),
	type: PaymentReconciliationSchema,
	args: DeleteArgs,
};
