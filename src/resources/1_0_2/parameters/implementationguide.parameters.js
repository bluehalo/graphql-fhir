const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the implementationguide query
 */
module.exports = {
	dependency: {
		type: UriScalar,
		description: 'Where to find dependency (See http://hl7.org/fhir/SearchParameter/implementationguide-dependency).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the implementation guide (See http://hl7.org/fhir/SearchParameter/implementationguide-status).'
	},
	description: {
		type: GraphQLString,
		description: 'Text search in the description of the implementation guide (See http://hl7.org/fhir/SearchParameter/implementationguide-description).'
	},
	name: {
		type: GraphQLString,
		description: 'Name of the implementation guide (See http://hl7.org/fhir/SearchParameter/implementationguide-name).'
	},
	context: {
		type: TokenScalar,
		description: 'A use context assigned to the structure (See http://hl7.org/fhir/SearchParameter/implementationguide-context).'
	},
	experimental: {
		type: TokenScalar,
		description: 'If for testing purposes, not real usage (See http://hl7.org/fhir/SearchParameter/implementationguide-experimental).'
	},
	date: {
		type: DateScalar,
		description: 'The implementation guide publication date (See http://hl7.org/fhir/SearchParameter/implementationguide-date).'
	},
	url: {
		type: UriScalar,
		description: 'Absolute URL used to reference this Implementation Guide (See http://hl7.org/fhir/SearchParameter/implementationguide-url).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the implementation guide (See http://hl7.org/fhir/SearchParameter/implementationguide-publisher).'
	},
	version: {
		type: TokenScalar,
		description: 'The version identifier of the implementation guide (See http://hl7.org/fhir/SearchParameter/implementationguide-version).'
	}
};
