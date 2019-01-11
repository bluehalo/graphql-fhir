const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the conceptmap query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ConceptMap-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.useContext',
		description: 'A use context assigned to the concept map',
	},
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
		xpath: 'ConceptMap.element.target.dependsOn.element',
		description: 'Reference to element/field/ValueSet mapping depends on',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ConceptMap.description',
		description: 'Text search in the description of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.identifier',
		description: 'Additional identifier for the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ConceptMap.name',
		description: 'Name of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-product
	product: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.element.target.product.element',
		description: 'Reference to element/field/ValueSet mapping depends on',
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
	// http://hl7.org/fhir/SearchParameter/ConceptMap-sourcecode
	sourcecode: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.element.code',
		description: 'Identifies element being mapped',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-sourcesystem
	sourcesystem: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.element.codeSystem',
		description: 'Code System (if value set crosses code systems)',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-sourceuri
	sourceuri: {
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
		description: 'Status of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-target
	target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ConceptMap.targetUri',
		description: 'Provides context to the mappings',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-targetcode
	targetcode: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.element.target.code',
		description: 'Code that identifies the target element',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-targetsystem
	targetsystem: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.element.target.codeSystem',
		description: 'System of the target (if necessary)',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ConceptMap.url',
		description: 'The URL of the concept map',
	},
	// http://hl7.org/fhir/SearchParameter/ConceptMap-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ConceptMap.version',
		description: 'The version identifier of the concept map',
	},
};
