const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the flag query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'Time period when flag is active (See http://hl7.org/fhir/SearchParameter/clinical-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business identifier (See http://hl7.org/fhir/SearchParameter/Flag-identifier).'
	},
	subject: {
		type: GraphQLString,
		description: 'The identity of a subject to list flags for (See http://hl7.org/fhir/SearchParameter/Flag-subject).'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a subject to list flags for (See http://hl7.org/fhir/SearchParameter/clinical-patient).'
	},
	author: {
		type: GraphQLString,
		description: 'Flag creator (See http://hl7.org/fhir/SearchParameter/Flag-author).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Alert relevant during encounter (See http://hl7.org/fhir/SearchParameter/clinical-encounter).'
	}
};
