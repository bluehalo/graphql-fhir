const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the slot query
 */
module.exports = {
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
	// http://hl7.org/fhir/SearchParameter/Slot-slot-type
	slot_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Slot.serviceType',
		description: 'The type of appointments that can be booked into the slot',
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
