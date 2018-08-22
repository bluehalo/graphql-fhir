const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the appointmentresponse query
 */
module.exports = {
	actor: {
		type: GraphQLString,
		description: 'The Person, Location/HealthcareService or Device that this appointment response replies for. See http://hl7.org/fhir/SearchParameter/AppointmentResponse-actor.'
	},
	identifier: {
		type: TokenScalar,
		description: 'An Identifier in this appointment response. See http://hl7.org/fhir/SearchParameter/AppointmentResponse-identifier.'
	},
	practitioner: {
		type: GraphQLString,
		description: 'This Response is for this Practitioner. See http://hl7.org/fhir/SearchParameter/AppointmentResponse-practitioner.'
	},
	part_status: {
		type: TokenScalar,
		description: 'The participants acceptance status for this appointment. See http://hl7.org/fhir/SearchParameter/AppointmentResponse-part-status.'
	},
	patient: {
		type: GraphQLString,
		description: 'This Response is for this Patient. See http://hl7.org/fhir/SearchParameter/AppointmentResponse-patient.'
	},
	appointment: {
		type: GraphQLString,
		description: 'The appointment that the response is attached to. See http://hl7.org/fhir/SearchParameter/AppointmentResponse-appointment.'
	},
	location: {
		type: GraphQLString,
		description: 'This Response is for this Location. See http://hl7.org/fhir/SearchParameter/AppointmentResponse-location.'
	}
};
