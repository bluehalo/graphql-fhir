// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PaymentNoticeSchema = require('../../schemas/paymentnotice.schema');

// Inputs
const PaymentNoticeInput = require('../../inputs/paymentnotice.input');


const {
	paymentnoticeCreateResolver,
	paymentnoticeUpdateResolver,
	paymentnoticeDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a PaymentNotice record.'
	},
	resource: {
		type: PaymentNoticeInput,
		description: 'PaymentNotice Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a PaymentNotice record for deletion.'
	}
};

/**
 * @name exports.PaymentNoticeCreateMutation
 * @summary PaymentNoticeCreate Mutation.
 */
module.exports.PaymentNoticeCreateMutation = {
	args: WriteArgs,
	description: 'Create a PaymentNotice',
	resolve: paymentnoticeCreateResolver,
	type: PaymentNoticeSchema
};

/**
 * @name exports.PaymentNoticeUpdateMutation
 * @summary PaymentNoticeUpdate Mutation.
 */
module.exports.PaymentNoticeUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple PaymentNotices',
	resolve: paymentnoticeUpdateResolver,
	type: PaymentNoticeSchema
};

/**
 * @name exports.PaymentNoticeDeleteMutation
 * @summary PaymentNoticeDelete Mutation.
 */
module.exports.PaymentNoticeDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single PaymentNotice',
	resolve: paymentnoticeDeleteResolver,
	type: PaymentNoticeSchema
};
