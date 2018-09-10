const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the appointment query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'Appointment date/time. (See http://hl7.org/fhir/SearchParameter/Appointment-date).'
	},
	actor: {
		type: GraphQLString,
		description: 'Any one of the individuals participating in the appointment (See http://hl7.org/fhir/SearchParameter/Appointment-actor).'
	},
	identifier: {
		type: TokenScalar,
		description: 'An Identifier of the Appointment (See http://hl7.org/fhir/SearchParameter/Appointment-identifier).'
	},
	practitioner: {
		type: GraphQLString,
		description: 'One of the individuals of the appointment is this practitioner (See http://hl7.org/fhir/SearchParameter/Appointment-practitioner).'
	},
	incomingreferral: {
		type: GraphQLString,
		description: 'The ReferralRequest provided as information to allocate to the Encounter (See http://hl7.org/fhir/SearchParameter/Appointment-incomingreferral).'
	},
	part_status: {
		type: TokenScalar,
		description: 'The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests. (See http://hl7.org/fhir/SearchParameter/Appointment-part-status).'
	},
	patient: {
		type: GraphQLString,
		description: 'One of the individuals of the appointment is this patient (See http://hl7.org/fhir/SearchParameter/Appointment-patient).'
	},
	appointment_type: {
		type: TokenScalar,
		description: 'The style of appointment or patient that has been booked in the slot (not service type) (See http://hl7.org/fhir/SearchParameter/Appointment-appointment-type).'
	},
	service_type: {
		type: TokenScalar,
		description: 'The specific service that is to be performed during this appointment (See http://hl7.org/fhir/SearchParameter/Appointment-service-type).'
	},
	location: {
		type: GraphQLString,
		description: 'This location is listed in the participants of the appointment (See http://hl7.org/fhir/SearchParameter/Appointment-location).'
	},
	status: {
		type: TokenScalar,
		description: 'The overall status of the appointment (See http://hl7.org/fhir/SearchParameter/Appointment-status).'
	}
};
