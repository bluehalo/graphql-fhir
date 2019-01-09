const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the servicedefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ServiceDefinition.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ServiceDefinition.date',
		description: 'The service definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ServiceDefinition.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ServiceDefinition.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ServiceDefinition.description',
		description: 'The description of the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ServiceDefinition.effectivePeriod',
		description:
			'The time during which the service definition is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ServiceDefinition.identifier',
		description: 'External identifier for the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ServiceDefinition.jurisdiction',
		description: 'Intended jurisdiction for the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ServiceDefinition.name',
		description: 'Computationally friendly name of the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ServiceDefinition.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ServiceDefinition.publisher',
		description: 'Name of the publisher of the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ServiceDefinition.status',
		description: 'The current status of the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ServiceDefinition.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ServiceDefinition.title',
		description: 'The human-friendly name of the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ServiceDefinition.topic',
		description: 'Topics associated with the module',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ServiceDefinition.url',
		description: 'The uri that identifies the service definition',
	},
	// http://hl7.org/fhir/SearchParameter/ServiceDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ServiceDefinition.version',
		description: 'The business version of the service definition',
	},
};
