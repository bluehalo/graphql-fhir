const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PaymentReconciliationDetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PaymentReconciliationDetail',
	description: 'List of individual settlement amounts and the corresponding transaction.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payment-type
		type: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'Code to indicate the nature of the payment, adjustment, funds advance, etc.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'The claim or financial resource.'
		},
		responce: {
			type: require('./reference.schema'),
			description: 'The claim response resource.'
		},
		submitter: {
			type: require('./reference.schema'),
			description: 'The Organization which submitted the invoice or financial transaction.'
		},
		payee: {
			type: require('./reference.schema'),
			description: 'The organization which is receiving the payment.'
		},
		date: {
			type: DateScalar,
			description: 'The date of the invoice or financial resource.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date of the invoice or financial resource.'
		},
		amount: {
			type: require('./quantity.schema'),
			description: 'Amount paid for this detail.'
		}
	})
});
