const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the implementationguide query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ImplementationGuide.date',
		description: 'The implementation guide publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-dependency
	dependency: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImplementationGuide.dependency.uri',
		description: 'Where to find dependency',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ImplementationGuide.description',
		description: 'The description of the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental
	experimental: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImplementationGuide.experimental',
		description: 'For testing purposes, not real usage',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImplementationGuide.jurisdiction',
		description: 'Intended jurisdiction for the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ImplementationGuide.name',
		description: 'Computationally friendly name of the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ImplementationGuide.publisher',
		description: 'Name of the publisher of the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource
	resource: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImplementationGuide.package.resource.sourceUri',
		description: 'Location of the resource',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImplementationGuide.status',
		description: 'The current status of the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImplementationGuide.url',
		description: 'The uri that identifies the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImplementationGuide.version',
		description: 'The business version of the implementation guide',
	},
};
