const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary PaymentReconciliation.detail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PaymentReconciliationDetail_Input',
	description:
		'List of individual settlement amounts and the corresponding transaction.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/payment-type
			type: {
				type: new GraphQLNonNull(require('./coding.input')),
				description:
					'Code to indicate the nature of the payment, adjustment, funds advance, etc.',
			},
			request: {
				type: require('./reference.input'),
				description: 'The claim or financial resource.',
			},
			responce: {
				type: require('./reference.input'),
				description: 'The claim response resource.',
			},
			submitter: {
				type: require('./reference.input'),
				description:
					'The Organization which submitted the invoice or financial transaction.',
			},
			payee: {
				type: require('./reference.input'),
				description: 'The organization which is receiving the payment.',
			},
			date: {
				type: DateScalar,
				description: 'The date of the invoice or financial resource.',
			},
			_date: {
				type: require('./element.input'),
				description: 'The date of the invoice or financial resource.',
			},
			amount: {
				type: require('./quantity.input'),
				description: 'Amount paid for this detail.',
			},
		}),
});
