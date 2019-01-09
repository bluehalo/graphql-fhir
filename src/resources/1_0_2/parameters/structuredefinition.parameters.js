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
		xpath: 'StructureDefinition.base',
		description: 'Structure that this set of constraints applies to',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path
	base_path: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.snapshot.element.base.path',
		description: 'Path that identifies the base element',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.code',
		description: 'A code for the profile',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.useContext',
		description: 'A use context assigned to the structure',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.contextType',
		description: 'resource | datatype | mapping | extension',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'StructureDefinition.date',
		description: 'The profile publication date',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.description',
		description: 'Text search in the description of the profile',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-display
	display: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.display',
		description: 'Use this name when displaying the value',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental
	experimental: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.experimental',
		description: 'If for testing purposes, not real usage',
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
		description: 'The identifier of the profile',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-kind
	kind: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.kind',
		description: 'datatype | resource | logical',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureDefinition.name',
		description: 'Name of the profile',
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
		description: 'Name of the publisher of the profile',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.status',
		description: 'The current status of the profile',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureDefinition.constrainedType',
		description: 'Any datatype or resource, including abstract ones',
	},
	// http://hl7.org/fhir/SearchParameter/StructureDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'StructureDefinition.url',
		description: 'Absolute URL used to reference this StructureDefinition',
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
		description: 'The version identifier of the profile',
	},
};
