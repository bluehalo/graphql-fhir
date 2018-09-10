const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the appointmentresponse query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'This Response is for this Patient (See http://hl7.org/fhir/SearchParameter/appointmentresponse-patient).'
	},
	practitioner: {
		type: GraphQLString,
		description: 'This Response is for this Practitioner (See http://hl7.org/fhir/SearchParameter/appointmentresponse-practitioner).'
	},
	location: {
		type: GraphQLString,
		description: 'This Response is for this Location (See http://hl7.org/fhir/SearchParameter/appointmentresponse-location).'
	},
	part_status: {
		type: TokenScalar,
		description: 'The participants acceptance status for this appointment (See http://hl7.org/fhir/SearchParameter/appointmentresponse-part-status).'
	},
	actor: {
		type: GraphQLString,
		description: 'The Person, Location/HealthcareService or Device that this appointment response replies for (See http://hl7.org/fhir/SearchParameter/appointmentresponse-actor).'
	},
	identifier: {
		type: TokenScalar,
		description: 'An Identifier in this appointment response (See http://hl7.org/fhir/SearchParameter/appointmentresponse-identifier).'
	},
	appointment: {
		type: GraphQLString,
		description: 'The appointment that the response is attached to (See http://hl7.org/fhir/SearchParameter/appointmentresponse-appointment).'
	}
};
