const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the slot query
 */
module.exports = {
	fb_type: {
		type: TokenScalar,
		description:
			'The free/busy status of the appointment (See http://hl7.org/fhir/SearchParameter/slot-fb-type).',
	},
	schedule: {
		type: GraphQLString,
		description:
			'The Schedule Resource that we are seeking a slot within (See http://hl7.org/fhir/SearchParameter/slot-schedule).',
	},
	start: {
		type: DateScalar,
		description:
			'Appointment date/time. (See http://hl7.org/fhir/SearchParameter/slot-start).',
	},
	slot_type: {
		type: TokenScalar,
		description:
			'The type of appointments that can be booked into the slot (See http://hl7.org/fhir/SearchParameter/slot-slot-type).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'A Slot Identifier (See http://hl7.org/fhir/SearchParameter/slot-identifier).',
	},
};
