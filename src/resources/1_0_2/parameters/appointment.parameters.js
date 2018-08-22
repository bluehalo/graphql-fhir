const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the appointment query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'One of the individuals of the appointment is this patient. See http://hl7.org/fhir/SearchParameter/appointment-patient.'
	},
	practitioner: {
		type: GraphQLString,
		description: 'One of the individuals of the appointment is this practitioner. See http://hl7.org/fhir/SearchParameter/appointment-practitioner.'
	},
	location: {
		type: GraphQLString,
		description: 'This location is listed in the participants of the appointment. See http://hl7.org/fhir/SearchParameter/appointment-location.'
	},
	status: {
		type: TokenScalar,
		description: 'The overall status of the appointment. See http://hl7.org/fhir/SearchParameter/appointment-status.'
	},
	part_status: {
		type: TokenScalar,
		description: 'The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests. See http://hl7.org/fhir/SearchParameter/appointment-part-status.'
	},
	actor: {
		type: GraphQLString,
		description: 'Any one of the individuals participating in the appointment. See http://hl7.org/fhir/SearchParameter/appointment-actor.'
	},
	date: {
		type: DateScalar,
		description: 'Appointment date/time. See http://hl7.org/fhir/SearchParameter/appointment-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'An Identifier of the Appointment. See http://hl7.org/fhir/SearchParameter/appointment-identifier.'
	}
};
