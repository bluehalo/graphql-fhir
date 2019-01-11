const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductauthorization query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-country
	country: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProductAuthorization.country',
		description:
			'The country in which the marketing authorization has been granted',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-holder
	holder: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicinalProductAuthorization.holder',
		description: 'Marketing Authorization Holder',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProductAuthorization.identifier',
		description:
			'Business identifier for the marketing authorization, as assigned by a regulator',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProductAuthorization.status',
		description: 'The status of the marketing authorization',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicinalProductAuthorization.subject',
		description: 'The medicinal product that is being authorized',
	},
};
