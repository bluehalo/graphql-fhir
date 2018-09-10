const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the expansionprofile query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The expansion profile publication date (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-identifier).'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-jurisdiction).'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-name).'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-description).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-publisher).'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-version).'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-url).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the expansion profile (See http://hl7.org/fhir/SearchParameter/ExpansionProfile-status).'
	}
};
