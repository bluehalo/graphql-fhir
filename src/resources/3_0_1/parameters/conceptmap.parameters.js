const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the conceptmap query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ConceptMap-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ConceptMap.date',
		description: 'The concept map publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-dependson
	dependson: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.group.element.target.dependsOn.property',
		description: 'Reference to property mapping depends on',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ConceptMap.description',
		description: 'The description of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.identifier',
		description: 'External identifier for the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.jurisdiction',
		description: 'Intended jurisdiction for the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ConceptMap.name',
		description: 'Computationally friendly name of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-other
	other: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.group.unmapped.url',
		description: 'Canonical URL for other concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-product
	product: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.group.element.target.product.property',
		description: 'Reference to property mapping depends on',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ConceptMap.publisher',
		description: 'Name of the publisher of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ConceptMap.sourceReference',
		description: 'Identifies the source of the concepts which are being mapped',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-source-code
	source_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.group.element.code',
		description: 'Identifies element being mapped',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-source-system
	source_system: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.group.source',
		description: 'Code System (if value set crosses code systems)',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-source-uri
	source_uri: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ConceptMap.sourceUri',
		description: 'Identifies the source of the concepts which are being mapped',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.status',
		description: 'The current status of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-target
	target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ConceptMap.targetReference',
		description: 'Provides context to the mappings',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-target-code
	target_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.group.element.target.code',
		description: 'Code that identifies the target element',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-target-system
	target_system: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.group.target',
		description: 'System of the target (if necessary)',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-target-uri
	target_uri: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ConceptMap.targetUri',
		description: 'Provides context to the mappings',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ConceptMap.title',
		description: 'The human-friendly name of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.url',
		description: 'The uri that identifies the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.version',
		description: 'The business version of the concept map',
	},
};
