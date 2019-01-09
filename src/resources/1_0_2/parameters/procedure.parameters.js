const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the procedure query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Procedure-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Procedure.code',
		description: 'A code to identify a  procedure',
	},
	// http://hl7.org/fhir/SearchParameter/Procedure-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Procedure.performedDateTime',
		description: 'Date/Period the procedure was performed',
	},
	// http://hl7.org/fhir/SearchParameter/Procedure-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Procedure.encounter',
		description: 'The encounter associated with the procedure',
	},
	// http://hl7.org/fhir/SearchParameter/Procedure-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Procedure.identifier',
		description: 'A unique identifier for a procedure',
	},
	// http://hl7.org/fhir/SearchParameter/Procedure-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Procedure.location',
		description: 'Where the procedure happened',
	},
	// http://hl7.org/fhir/SearchParameter/Procedure-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Procedure.subject',
		description: 'Search by subject - a patient',
	},
	// http://hl7.org/fhir/SearchParameter/Procedure-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Procedure.performer.actor',
		description: 'The reference to the practitioner',
	},
	// http://hl7.org/fhir/SearchParameter/Procedure-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Procedure.subject',
		description: 'Search by subject',
	},
};
