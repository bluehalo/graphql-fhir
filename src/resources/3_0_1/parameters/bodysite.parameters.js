const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the bodysite query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Identifier for this instance of the anatomical location (See http://hl7.org/fhir/SearchParameter/BodySite-identifier).'
	},
	code: {
		type: TokenScalar,
		description: 'Named anatomical location (See http://hl7.org/fhir/SearchParameter/BodySite-code).'
	},
	patient: {
		type: GraphQLString,
		description: 'Patient to whom bodysite belongs (See http://hl7.org/fhir/SearchParameter/BodySite-patient).'
	}
};
