const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

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
	// http://hl7.org/fhir/SearchParameter/Appointment-appointment-type
	appointment_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.appointmentType',
		description:
			'The style of appointment or patient that has been booked in the slot (not service type)',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.basedOn',
		description: 'The service request this appointment is allocated to assess',
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
	// http://hl7.org/fhir/SearchParameter/Appointment-reason-code
	reason_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.reasonCode',
		description: 'Coded reason this appointment is scheduled',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-reason-reference
	reason_reference: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.reasonReference',
		description: 'Reason the appointment is to take place (resource)',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-service-category
	service_category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.serviceCategory',
		description:
			'A broad categorization of the service that is to be performed during this appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-service-type
	service_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.serviceType',
		description:
			'The specific service that is to be performed during this appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-slot
	slot: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.slot',
		description: 'The slots that this appointment is filling',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.specialty',
		description:
			'The specialty of a practitioner that would be required to perform the service requested in this appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Appointment.status',
		description: 'The overall status of the appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Appointment-supporting-info
	supporting_info: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Appointment.supportingInformation',
		description: 'Additional information to support the appointment',
	},
};
