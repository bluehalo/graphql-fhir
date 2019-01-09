const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the flag query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Flag-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Flag.author',
		description: 'Flag creator',
	},
	// http://hl7.org/fhir/SearchParameter/Flag-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Flag.period',
		description: 'Time period when flag is active',
	},
	// http://hl7.org/fhir/SearchParameter/Flag-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Flag.encounter',
		description: 'Alert relevant during encounter',
	},
	// http://hl7.org/fhir/SearchParameter/Flag-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Flag.subject',
		description: 'The identity of a subject to list flags for',
	},
	// http://hl7.org/fhir/SearchParameter/Flag-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Flag.subject',
		description: 'The identity of a subject to list flags for',
	},
};
