const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the structuredefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'The structure definition publication date (See http://hl7.org/fhir/SearchParameter/StructureDefinition-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'External identifier for the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-identifier).',
	},
	valueset: {
		type: GraphQLString,
		description:
			'A vocabulary binding reference (See http://hl7.org/fhir/SearchParameter/StructureDefinition-valueset).',
	},
	kind: {
		type: TokenScalar,
		description:
			'primitive-type | complex-type | resource | logical (See http://hl7.org/fhir/SearchParameter/StructureDefinition-kind).',
	},
	jurisdiction: {
		type: TokenScalar,
		description:
			'Intended jurisdiction for the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-jurisdiction).',
	},
	description: {
		type: GraphQLString,
		description:
			'The description of the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-description).',
	},
	experimental: {
		type: TokenScalar,
		description:
			'For testing purposes, not real usage (See http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental).',
	},
	context_type: {
		type: TokenScalar,
		description:
			'resource | datatype | extension (See http://hl7.org/fhir/SearchParameter/StructureDefinition-context-type).',
	},
	abstract: {
		type: TokenScalar,
		description:
			'Whether the structure is abstract (See http://hl7.org/fhir/SearchParameter/StructureDefinition-abstract).',
	},
	title: {
		type: GraphQLString,
		description:
			'The human-friendly name of the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-title).',
	},
	type: {
		type: TokenScalar,
		description:
			'Type defined or constrained by this structure (See http://hl7.org/fhir/SearchParameter/StructureDefinition-type).',
	},
	version: {
		type: TokenScalar,
		description:
			'The business version of the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-version).',
	},
	url: {
		type: UriScalar,
		description:
			'The uri that identifies the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-url).',
	},
	path: {
		type: TokenScalar,
		description:
			'A path that is constrained in the profile (See http://hl7.org/fhir/SearchParameter/StructureDefinition-path).',
	},
	ext_context: {
		type: GraphQLString,
		description:
			'Where the extension can be used in instances (See http://hl7.org/fhir/SearchParameter/StructureDefinition-ext-context).',
	},
	name: {
		type: GraphQLString,
		description:
			'Computationally friendly name of the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-name).',
	},
	base_path: {
		type: TokenScalar,
		description:
			'Path that identifies the base element (See http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path).',
	},
	publisher: {
		type: GraphQLString,
		description:
			'Name of the publisher of the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-publisher).',
	},
	derivation: {
		type: TokenScalar,
		description:
			'specialization | constraint - How relates to base definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-derivation).',
	},
	keyword: {
		type: TokenScalar,
		description:
			'A code for the profile (See http://hl7.org/fhir/SearchParameter/StructureDefinition-keyword).',
	},
	status: {
		type: TokenScalar,
		description:
			'The current status of the structure definition (See http://hl7.org/fhir/SearchParameter/StructureDefinition-status).',
	},
	base: {
		type: UriScalar,
		description:
			'Definition that this type is constrained/specialized from (See http://hl7.org/fhir/SearchParameter/StructureDefinition-base).',
	},
};
