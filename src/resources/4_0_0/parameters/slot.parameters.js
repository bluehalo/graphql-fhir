const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the slot query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Slot-appointment-type
	appointment_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Slot.appointmentType',
		description:
			'The style of appointment or patient that may be booked in the slot (not service type)',
	},
	// http://hl7.org/fhir/SearchParameter/Slot-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Slot.identifier',
		description: 'A Slot Identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Slot-schedule
	schedule: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Slot.schedule',
		description: 'The Schedule Resource that we are seeking a slot within',
	},
	// http://hl7.org/fhir/SearchParameter/Slot-service-category
	service_category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Slot.serviceCategory',
		description:
			'A broad categorization of the service that is to be performed during this appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Slot-service-type
	service_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Slot.serviceType',
		description: 'The type of appointments that can be booked into the slot',
	},
	// http://hl7.org/fhir/SearchParameter/Slot-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Slot.specialty',
		description:
			'The specialty of a practitioner that would be required to perform the service requested in this appointment',
	},
	// http://hl7.org/fhir/SearchParameter/Slot-start
	start: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Slot.start',
		description: 'Appointment date/time.',
	},
	// http://hl7.org/fhir/SearchParameter/Slot-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Slot.status',
		description: 'The free/busy status of the appointment',
	},
};
