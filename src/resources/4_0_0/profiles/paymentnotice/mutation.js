// Schemas
const PaymentNoticeSchema = require('../../schemas/paymentnotice.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const PaymentNoticeInput = require('../../inputs/paymentnotice.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createPaymentNotice,
	updatePaymentNotice,
	removePaymentNotice,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PaymentNotice',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a PaymentNotice record.',
	},
	resource: {
		type: new GraphQLNonNull(PaymentNoticeInput),
		description: 'PaymentNotice Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a PaymentNotice record for deletion.',
	},
};

/**
 * @name exports.PaymentNoticeCreateMutation
 * @summary PaymentNoticeCreate mutation.
 */
module.exports.PaymentNoticeCreateMutation = {
	description: 'Create a PaymentNotice record',
	resolve: scopeInvariant(scopeOptions, createPaymentNotice),
	type: PaymentNoticeSchema,
	args: WriteArgs,
};

/**
 * @name exports.PaymentNoticeUpdateMutation
 * @summary PaymentNoticeUpdate mutation.
 */
module.exports.PaymentNoticeUpdateMutation = {
	description: 'Update a PaymentNotice record',
	resolve: scopeInvariant(scopeOptions, updatePaymentNotice),
	type: PaymentNoticeSchema,
	args: WriteArgs,
};

/**
 * @name exports.PaymentNoticeRemoveMutation
 * @summary PaymentNoticeRemove mutation.
 */
module.exports.PaymentNoticeRemoveMutation = {
	description: 'Remove a PaymentNotice record',
	resolve: scopeInvariant(scopeOptions, removePaymentNotice),
	type: PaymentNoticeSchema,
	args: DeleteArgs,
};
