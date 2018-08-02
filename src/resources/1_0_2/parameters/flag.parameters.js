const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the flag query
 */
module.exports = {
	author: {
		type: GraphQLString,
		description: 'Flag creator. See http://hl7.org/fhir/SearchParameter/flag-author.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a subject to list flags for. See http://hl7.org/fhir/SearchParameter/flag-patient.'
	},
	subject: {
		type: GraphQLString,
		description: 'The identity of a subject to list flags for. See http://hl7.org/fhir/SearchParameter/flag-subject.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Alert relevant during encounter. See http://hl7.org/fhir/SearchParameter/flag-encounter.'
	},
	date: {
		type: DateScalar,
		description: 'Time period when flag is active. See http://hl7.org/fhir/SearchParameter/flag-date.'
	}
};
