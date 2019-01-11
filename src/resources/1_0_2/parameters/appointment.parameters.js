const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the appointment query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Appointment-actor
	actor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		description: 'Any one of the individuals participating in the appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Appointment.start',
		description: 'Appointment date/time.',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.identifier',
		description: 'An Identifier of the Appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		description:
			'This location is listed in the participants of the appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-part-status
	part_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.participant.status',
		description:
			'The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests.',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		description: 'One of the individuals of the appointment is this patient',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-practitioner
	practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.participant.actor',
		description:
			'One of the individuals of the appointment is this practitioner',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.status',
		description: 'The overall status of the appointment',
	},
};
