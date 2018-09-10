const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the structuredefinition query
 */
module.exports = {
	abstract: {
		type: TokenScalar,
		description: 'Whether the structure is abstract (See http://hl7.org/fhir/SearchParameter/structuredefinition-abstract).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-status).'
	},
	experimental: {
		type: TokenScalar,
		description: 'If for testing purposes, not real usage (See http://hl7.org/fhir/SearchParameter/structuredefinition-experimental).'
	},
	display: {
		type: GraphQLString,
		description: 'Use this name when displaying the value (See http://hl7.org/fhir/SearchParameter/structuredefinition-display).'
	},
	ext_context: {
		type: GraphQLString,
		description: 'Where the extension can be used in instances (See http://hl7.org/fhir/SearchParameter/structuredefinition-ext-context).'
	},
	code: {
		type: TokenScalar,
		description: 'A code for the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-code).'
	},
	date: {
		type: DateScalar,
		description: 'The profile publication date (See http://hl7.org/fhir/SearchParameter/structuredefinition-date).'
	},
	type: {
		type: TokenScalar,
		description: 'Any datatype or resource, including abstract ones (See http://hl7.org/fhir/SearchParameter/structuredefinition-type).'
	},
	url: {
		type: UriScalar,
		description: 'Absolute URL used to reference this StructureDefinition (See http://hl7.org/fhir/SearchParameter/structuredefinition-url).'
	},
	kind: {
		type: TokenScalar,
		description: 'datatype | resource | logical (See http://hl7.org/fhir/SearchParameter/structuredefinition-kind).'
	},
	version: {
		type: TokenScalar,
		description: 'The version identifier of the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-version).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-publisher).'
	},
	base_path: {
		type: TokenScalar,
		description: 'Path that identifies the base element (See http://hl7.org/fhir/SearchParameter/structuredefinition-base-path).'
	},
	valueset: {
		type: GraphQLString,
		description: 'A vocabulary binding reference (See http://hl7.org/fhir/SearchParameter/structuredefinition-valueset).'
	},
	context_type: {
		type: TokenScalar,
		description: 'resource | datatype | mapping | extension (See http://hl7.org/fhir/SearchParameter/structuredefinition-context-type).'
	},
	description: {
		type: GraphQLString,
		description: 'Text search in the description of the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-description).'
	},
	name: {
		type: GraphQLString,
		description: 'Name of the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-name).'
	},
	base: {
		type: UriScalar,
		description: 'Structure that this set of constraints applies to (See http://hl7.org/fhir/SearchParameter/structuredefinition-base).'
	},
	context: {
		type: TokenScalar,
		description: 'A use context assigned to the structure (See http://hl7.org/fhir/SearchParameter/structuredefinition-context).'
	},
	path: {
		type: TokenScalar,
		description: 'A path that is constrained in the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-path).'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identifier of the profile (See http://hl7.org/fhir/SearchParameter/structuredefinition-identifier).'
	}
};
