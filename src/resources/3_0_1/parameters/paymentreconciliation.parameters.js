const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the paymentreconciliation query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'The business identifier of the Explanation of Benefit (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier).',
	},
	request: {
		type: GraphQLString,
		description:
			'The reference to the claim (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request).',
	},
	disposition: {
		type: GraphQLString,
		description:
			'The contents of the disposition message (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-disposition).',
	},
	created: {
		type: DateScalar,
		description:
			'The creation date (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-created).',
	},
	organization: {
		type: GraphQLString,
		description:
			'The organization who generated this resource (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-organization).',
	},
	request_organization: {
		type: GraphQLString,
		description:
			'The organization who generated this resource (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-organization).',
	},
	request_provider: {
		type: GraphQLString,
		description:
			'The reference to the provider who sumbitted the claim (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request-provider).',
	},
	outcome: {
		type: TokenScalar,
		description:
			'The processing outcome (See http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome).',
	},
};
