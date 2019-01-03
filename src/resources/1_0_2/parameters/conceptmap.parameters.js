const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the conceptmap query
 */
module.exports = {
	dependson: {
		type: UriScalar,
		description:
			'Reference to element/field/ValueSet mapping depends on (See http://hl7.org/fhir/SearchParameter/conceptmap-dependson).',
	},
	status: {
		type: TokenScalar,
		description:
			'Status of the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-status).',
	},
	date: {
		type: DateScalar,
		description:
			'The concept map publication date (See http://hl7.org/fhir/SearchParameter/conceptmap-date).',
	},
	url: {
		type: UriScalar,
		description:
			'The URL of the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-url).',
	},
	targetsystem: {
		type: UriScalar,
		description:
			'System of the target (if necessary) (See http://hl7.org/fhir/SearchParameter/conceptmap-targetsystem).',
	},
	version: {
		type: TokenScalar,
		description:
			'The version identifier of the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-version).',
	},
	publisher: {
		type: GraphQLString,
		description:
			'Name of the publisher of the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-publisher).',
	},
	product: {
		type: UriScalar,
		description:
			'Reference to element/field/ValueSet mapping depends on (See http://hl7.org/fhir/SearchParameter/conceptmap-product).',
	},
	sourcecode: {
		type: TokenScalar,
		description:
			'Identifies element being mapped (See http://hl7.org/fhir/SearchParameter/conceptmap-sourcecode).',
	},
	sourceuri: {
		type: GraphQLString,
		description:
			'Identifies the source of the concepts which are being mapped (See http://hl7.org/fhir/SearchParameter/conceptmap-sourceuri).',
	},
	source: {
		type: GraphQLString,
		description:
			'Identifies the source of the concepts which are being mapped (See http://hl7.org/fhir/SearchParameter/conceptmap-source).',
	},
	description: {
		type: GraphQLString,
		description:
			'Text search in the description of the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-description).',
	},
	name: {
		type: GraphQLString,
		description:
			'Name of the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-name).',
	},
	context: {
		type: TokenScalar,
		description:
			'A use context assigned to the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-context).',
	},
	target: {
		type: GraphQLString,
		description:
			'Provides context to the mappings (See http://hl7.org/fhir/SearchParameter/conceptmap-target).',
	},
	targetcode: {
		type: TokenScalar,
		description:
			'Code that identifies the target element (See http://hl7.org/fhir/SearchParameter/conceptmap-targetcode).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Additional identifier for the concept map (See http://hl7.org/fhir/SearchParameter/conceptmap-identifier).',
	},
	sourcesystem: {
		type: UriScalar,
		description:
			'Code System (if value set crosses code systems) (See http://hl7.org/fhir/SearchParameter/conceptmap-sourcesystem).',
	},
};
