// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PaymentReconciliationSchema = require('../../schemas/paymentreconciliation.schema');

// Inputs
const PaymentReconciliationInput = require('../../inputs/paymentreconciliation.input');


const {
	paymentreconciliationCreateResolver,
	paymentreconciliationUpdateResolver,
	paymentreconciliationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a PaymentReconciliation record.'
	},
	resource: {
		type: PaymentReconciliationInput,
		description: 'PaymentReconciliation Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a PaymentReconciliation record for deletion.'
	}
};

/**
 * @name exports.PaymentReconciliationCreateMutation
 * @summary PaymentReconciliationCreate Mutation.
 */
module.exports.PaymentReconciliationCreateMutation = {
	args: WriteArgs,
	description: 'Create a PaymentReconciliation',
	resolve: paymentreconciliationCreateResolver,
	type: PaymentReconciliationSchema
};

/**
 * @name exports.PaymentReconciliationUpdateMutation
 * @summary PaymentReconciliationUpdate Mutation.
 */
module.exports.PaymentReconciliationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple PaymentReconciliations',
	resolve: paymentreconciliationUpdateResolver,
	type: PaymentReconciliationSchema
};

/**
 * @name exports.PaymentReconciliationDeleteMutation
 * @summary PaymentReconciliationDelete Mutation.
 */
module.exports.PaymentReconciliationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single PaymentReconciliation',
	resolve: paymentreconciliationDeleteResolver,
	type: PaymentReconciliationSchema
};
