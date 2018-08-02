const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the detectedissue query
 */
module.exports = {
	author: {
		type: GraphQLString,
		description: 'The provider or device that identified the issue. See http://hl7.org/fhir/SearchParameter/detectedissue-author.'
	},
	category: {
		type: TokenScalar,
		description: 'Issue Category, e.g. drug-drug, duplicate therapy, etc. See http://hl7.org/fhir/SearchParameter/detectedissue-category.'
	},
	implicated: {
		type: GraphQLString,
		description: 'Problem resource. See http://hl7.org/fhir/SearchParameter/detectedissue-implicated.'
	},
	patient: {
		type: GraphQLString,
		description: 'Associated patient. See http://hl7.org/fhir/SearchParameter/detectedissue-patient.'
	},
	date: {
		type: DateScalar,
		description: 'When identified. See http://hl7.org/fhir/SearchParameter/detectedissue-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique id for the detected issue. See http://hl7.org/fhir/SearchParameter/detectedissue-identifier.'
	}
};
