const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the immunization query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Immunization-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Immunization.date',
		description: 'Vaccination  (non)-Administration Date',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-dose-sequence
	dose_sequence: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'Immunization.vaccinationProtocol.doseSequence',
		description: 'Dose number within series',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Immunization.identifier',
		description: 'Business identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Immunization.location',
		description:
			'The service delivery location or facility in which the vaccine was / was to be administered',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-lot-number
	lot_number: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Immunization.lotNumber',
		description: 'Vaccine Lot Number',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-manufacturer
	manufacturer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Immunization.manufacturer',
		description: 'Vaccine Manufacturer',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-notgiven
	notgiven: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Immunization.wasNotGiven',
		description: 'Administrations which were not given',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Immunization.patient',
		description: 'The patient for the vaccination record',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Immunization.performer',
		description: 'The practitioner who administered the vaccination',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-reaction
	reaction: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Immunization.reaction.detail',
		description: 'Additional information on reaction',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-reaction-date
	reaction_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Immunization.reaction.date',
		description: 'When reaction started',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-reason
	reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Immunization.explanation.reason',
		description: 'Why immunization occurred',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-reason-not-given
	reason_not_given: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Immunization.explanation.reasonNotGiven',
		description: 'Explanation of reason vaccination was not administered',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Immunization.requester',
		description: 'The practitioner who ordered the vaccination',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Immunization.status',
		description: 'Immunization event status',
	},
	// http://hl7.org/fhir/SearchParameter/Immunization-vaccine-code
	vaccine_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Immunization.vaccineCode',
		description: 'Vaccine Product Administered',
	},
};
