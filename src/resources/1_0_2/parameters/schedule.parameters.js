const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the schedule query
 */
module.exports = {
	actor: {
		type: GraphQLString,
		description: 'The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for. See http://hl7.org/fhir/SearchParameter/schedule-actor.'
	},
	date: {
		type: DateScalar,
		description: 'Search for Schedule resources that have a period that contains this date specified. See http://hl7.org/fhir/SearchParameter/schedule-date.'
	},
	type: {
		type: TokenScalar,
		description: 'The type of appointments that can be booked into associated slot(s). See http://hl7.org/fhir/SearchParameter/schedule-type.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A Schedule Identifier. See http://hl7.org/fhir/SearchParameter/schedule-identifier.'
	}
};
