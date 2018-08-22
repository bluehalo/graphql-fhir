const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the library query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The library publication date. See http://hl7.org/fhir/SearchParameter/Library-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the library. See http://hl7.org/fhir/SearchParameter/Library-identifier.'
	},
	successor: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Library-successor.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the library. See http://hl7.org/fhir/SearchParameter/Library-jurisdiction.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the library. See http://hl7.org/fhir/SearchParameter/Library-description.'
	},
	derived_from: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Library-derived-from.'
	},
	predecessor: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Library-predecessor.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the library. See http://hl7.org/fhir/SearchParameter/Library-title.'
	},
	composed_of: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Library-composed-of.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the library. See http://hl7.org/fhir/SearchParameter/Library-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the library. See http://hl7.org/fhir/SearchParameter/Library-url.'
	},
	effective: {
		type: DateScalar,
		description: 'The time during which the library is intended to be in use. See http://hl7.org/fhir/SearchParameter/Library-effective.'
	},
	depends_on: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Library-depends-on.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the library. See http://hl7.org/fhir/SearchParameter/Library-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the library. See http://hl7.org/fhir/SearchParameter/Library-publisher.'
	},
	topic: {
		type: TokenScalar,
		description: 'Topics associated with the module. See http://hl7.org/fhir/SearchParameter/Library-topic.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the library. See http://hl7.org/fhir/SearchParameter/Library-status.'
	}
};
