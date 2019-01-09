const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the implementationguide query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImplementationGuide.useContext',
		description: 'A use context assigned to the structure',
	},
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
		description: 'Text search in the description of the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental
	experimental: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImplementationGuide.experimental',
		description: 'If for testing purposes, not real usage',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ImplementationGuide.name',
		description: 'Name of the implementation guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ImplementationGuide.publisher',
		description: 'Name of the publisher of the implementation guide',
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
		description: 'Absolute URL used to reference this Implementation Guide',
	},
	// http://hl7.org/fhir/SearchParameter/ImplementationGuide-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImplementationGuide.version',
		description: 'The version identifier of the implementation guide',
	},
};
