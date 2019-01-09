const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the structuredefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-abstract
	abstract: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.abstract',
		description: 'Whether the structure is abstract',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-base
	base: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'StructureDefinition.baseDefinition',
		description: 'Definition that this type is constrained/specialized from',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path
	base_path: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.snapshot.element.base.path',
		description: 'Path that identifies the base element',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.contextType',
		description: 'resource | datatype | extension',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'StructureDefinition.date',
		description: 'The structure definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-derivation
	derivation: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.derivation',
		description: 'specialization | constraint - How relates to base definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.description',
		description: 'The description of the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental
	experimental: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.experimental',
		description: 'For testing purposes, not real usage',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-ext-context
	ext_context: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.context',
		description: 'Where the extension can be used in instances',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.identifier',
		description: 'External identifier for the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.jurisdiction',
		description: 'Intended jurisdiction for the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-keyword
	keyword: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.keyword',
		description: 'A code for the profile',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-kind
	kind: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.kind',
		description: 'primitive-type | complex-type | resource | logical',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.name',
		description: 'Computationally friendly name of the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-path
	path: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.snapshot.element.path',
		description: 'A path that is constrained in the profile',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.publisher',
		description: 'Name of the publisher of the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.status',
		description: 'The current status of the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.title',
		description: 'The human-friendly name of the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.type',
		description: 'Type defined or constrained by this structure',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'StructureDefinition.url',
		description: 'The uri that identifies the structure definition',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-valueset
	valueset: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'StructureDefinition.snapshot.element.binding.valueSetUri',
		description: 'A vocabulary binding reference',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.version',
		description: 'The business version of the structure definition',
	},
};
