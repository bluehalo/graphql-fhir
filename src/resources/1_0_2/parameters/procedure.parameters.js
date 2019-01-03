const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the procedure query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description:
			'Search by subject - a patient (See http://hl7.org/fhir/SearchParameter/procedure-patient).',
	},
	location: {
		type: GraphQLString,
		description:
			'Where the procedure happened (See http://hl7.org/fhir/SearchParameter/procedure-location).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Search by subject (See http://hl7.org/fhir/SearchParameter/procedure-subject).',
	},
	performer: {
		type: GraphQLString,
		description:
			'The reference to the practitioner (See http://hl7.org/fhir/SearchParameter/procedure-performer).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'The encounter associated with the procedure (See http://hl7.org/fhir/SearchParameter/procedure-encounter).',
	},
	code: {
		type: TokenScalar,
		description:
			'A code to identify a  procedure (See http://hl7.org/fhir/SearchParameter/procedure-code).',
	},
	date: {
		type: DateScalar,
		description:
			'Date/Period the procedure was performed (See http://hl7.org/fhir/SearchParameter/procedure-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'A unique identifier for a procedure (See http://hl7.org/fhir/SearchParameter/procedure-identifier).',
	},
};
