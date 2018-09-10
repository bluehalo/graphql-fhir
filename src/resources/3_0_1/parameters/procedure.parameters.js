const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the procedure query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'Date/Period the procedure was performed (See http://hl7.org/fhir/SearchParameter/clinical-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'A unique identifier for a procedure (See http://hl7.org/fhir/SearchParameter/clinical-identifier).'
	},
	code: {
		type: TokenScalar,
		description: 'A code to identify a  procedure (See http://hl7.org/fhir/SearchParameter/clinical-code).'
	},
	performer: {
		type: GraphQLString,
		description: 'The reference to the practitioner (See http://hl7.org/fhir/SearchParameter/Procedure-performer).'
	},
	subject: {
		type: GraphQLString,
		description: 'Search by subject (See http://hl7.org/fhir/SearchParameter/Procedure-subject).'
	},
	part_of: {
		type: GraphQLString,
		description: 'Part of referenced event (See http://hl7.org/fhir/SearchParameter/Procedure-part-of).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Search by encounter (See http://hl7.org/fhir/SearchParameter/clinical-encounter).'
	},
	based_on: {
		type: GraphQLString,
		description: 'A request for this procedure (See http://hl7.org/fhir/SearchParameter/Procedure-based-on).'
	},
	patient: {
		type: GraphQLString,
		description: 'Search by subject - a patient (See http://hl7.org/fhir/SearchParameter/clinical-patient).'
	},
	context: {
		type: GraphQLString,
		description: 'Encounter or episode associated with the procedure (See http://hl7.org/fhir/SearchParameter/Procedure-context).'
	},
	location: {
		type: GraphQLString,
		description: 'Where the procedure happened (See http://hl7.org/fhir/SearchParameter/Procedure-location).'
	},
	definition: {
		type: GraphQLString,
		description: 'Instantiates protocol or definition (See http://hl7.org/fhir/SearchParameter/Procedure-definition).'
	},
	category: {
		type: TokenScalar,
		description: 'Classification of the procedure (See http://hl7.org/fhir/SearchParameter/Procedure-category).'
	},
	status: {
		type: TokenScalar,
		description: 'preparation | in-progress | suspended | aborted | completed | entered-in-error | unknown (See http://hl7.org/fhir/SearchParameter/Procedure-status).'
	}
};
