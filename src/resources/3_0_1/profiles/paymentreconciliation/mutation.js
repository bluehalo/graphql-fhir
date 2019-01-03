// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PaymentReconciliationSchema = require('../../schemas/paymentreconciliation.schema');

// Inputs
const PaymentReconciliationInput = require('../../inputs/paymentreconciliation.input');

// Resolvers
const {
	paymentreconciliationCreateResolver,
	paymentreconciliationUpdateResolver,
	paymentreconciliationDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PaymentReconciliation',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a PaymentReconciliation record for deletion.',
	},
};

/**
 * @name exports.PaymentReconciliationCreateMutation
 * @summary PaymentReconciliationCreate Mutation.
 */
module.exports.PaymentReconciliationCreateMutation = {
	args: WriteArgs,
	description: 'Create a PaymentReconciliation',
	resolve: scopeInvariant(scopeOptions, paymentreconciliationCreateResolver),
	type: PaymentReconciliationSchema,
};

/**
 * @name exports.PaymentReconciliationUpdateMutation
 * @summary PaymentReconciliationUpdate Mutation.
 */
module.exports.PaymentReconciliationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple PaymentReconciliations',
	resolve: scopeInvariant(scopeOptions, paymentreconciliationUpdateResolver),
	type: PaymentReconciliationSchema,
};

/**
 * @name exports.PaymentReconciliationDeleteMutation
 * @summary PaymentReconciliationDelete Mutation.
 */
module.exports.PaymentReconciliationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single PaymentReconciliation',
	resolve: scopeInvariant(scopeOptions, paymentreconciliationDeleteResolver),
	type: PaymentReconciliationSchema,
};
