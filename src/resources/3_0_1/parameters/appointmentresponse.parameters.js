const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the appointmentresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/AppointmentResponse-actor
	actor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		description:
			'The Person, Location/HealthcareService or Device that this appointment response replies for',
	},
	// http://hl7.org/fhir/SearchParameter/AppointmentResponse-appointment
	appointment: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.appointment',
		description: 'The appointment that the response is attached to',
	},
	// http://hl7.org/fhir/SearchParameter/AppointmentResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AppointmentResponse.identifier',
		description: 'An Identifier in this appointment response',
	},
	// http://hl7.org/fhir/SearchParameter/AppointmentResponse-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		description: 'This Response is for this Location',
	},
	// http://hl7.org/fhir/SearchParameter/AppointmentResponse-part-status
	part_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AppointmentResponse.participantStatus',
		description: 'The participants acceptance status for this appointment',
	},
	// http://hl7.org/fhir/SearchParameter/AppointmentResponse-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		description: 'This Response is for this Patient',
	},
	// http://hl7.org/fhir/SearchParameter/AppointmentResponse-practitioner
	practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AppointmentResponse.actor',
		description: 'This Response is for this Practitioner',
	},
};
