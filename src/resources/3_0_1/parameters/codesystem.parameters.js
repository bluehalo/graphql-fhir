const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the codesystem query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The code system publication date (See http://hl7.org/fhir/SearchParameter/CodeSystem-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-identifier).'
	},
	code: {
		type: TokenScalar,
		description: 'A code defined in the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-code).'
	},
	content_mode: {
		type: TokenScalar,
		description: 'not-present | example | fragment | complete (See http://hl7.org/fhir/SearchParameter/CodeSystem-content-mode).'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-jurisdiction).'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-description).'
	},
	language: {
		type: TokenScalar,
		description: 'A language in which a designation is provided (See http://hl7.org/fhir/SearchParameter/CodeSystem-language).'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-title).'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-version).'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-url).'
	},
	system: {
		type: UriScalar,
		description: 'The system for any codes defined by this code system (same as \'url\') (See http://hl7.org/fhir/SearchParameter/CodeSystem-system).'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-name).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-publisher).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the code system (See http://hl7.org/fhir/SearchParameter/CodeSystem-status).'
	}
};
