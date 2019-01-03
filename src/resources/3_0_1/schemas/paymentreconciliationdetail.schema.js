const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary PaymentReconciliation.detail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PaymentReconciliationDetail',
	description:
		'List of individual settlement amounts and the corresponding transaction.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/payment-type
			type: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description:
					'Code to indicate the nature of the payment, adjustment, funds advance, etc.',
			},
			request: {
				type: require('./reference.schema'),
				description: 'The claim or financial resource.',
			},
			response: {
				type: require('./reference.schema'),
				description: 'The claim response resource.',
			},
			submitter: {
				type: require('./reference.schema'),
				description:
					'The Organization which submitted the claim or financial transaction.',
			},
			payee: {
				type: require('./reference.schema'),
				description: 'The organization which is receiving the payment.',
			},
			date: {
				type: DateScalar,
				description: 'The date of the invoice or financial resource.',
			},
			_date: {
				type: require('./element.schema'),
				description: 'The date of the invoice or financial resource.',
			},
			amount: {
				type: require('./money.schema'),
				description: 'Amount paid for this detail.',
			},
		}),
});
