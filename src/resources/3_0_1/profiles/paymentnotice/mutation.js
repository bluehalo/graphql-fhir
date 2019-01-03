// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PaymentNoticeSchema = require('../../schemas/paymentnotice.schema');

// Inputs
const PaymentNoticeInput = require('../../inputs/paymentnotice.input');

// Resolvers
const {
	paymentnoticeCreateResolver,
	paymentnoticeUpdateResolver,
	paymentnoticeDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PaymentNotice',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a PaymentNotice record for deletion.',
	},
};

/**
 * @name exports.PaymentNoticeCreateMutation
 * @summary PaymentNoticeCreate Mutation.
 */
module.exports.PaymentNoticeCreateMutation = {
	args: WriteArgs,
	description: 'Create a PaymentNotice',
	resolve: scopeInvariant(scopeOptions, paymentnoticeCreateResolver),
	type: PaymentNoticeSchema,
};

/**
 * @name exports.PaymentNoticeUpdateMutation
 * @summary PaymentNoticeUpdate Mutation.
 */
module.exports.PaymentNoticeUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple PaymentNotices',
	resolve: scopeInvariant(scopeOptions, paymentnoticeUpdateResolver),
	type: PaymentNoticeSchema,
};

/**
 * @name exports.PaymentNoticeDeleteMutation
 * @summary PaymentNoticeDelete Mutation.
 */
module.exports.PaymentNoticeDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single PaymentNotice',
	resolve: scopeInvariant(scopeOptions, paymentnoticeDeleteResolver),
	type: PaymentNoticeSchema,
};
