const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the conceptmap query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The concept map publication date (See http://hl7.org/fhir/SearchParameter/ConceptMap-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-identifier).'
	},
	product: {
		type: UriScalar,
		description: 'Reference to property mapping depends on (See http://hl7.org/fhir/SearchParameter/ConceptMap-product).'
	},
	other: {
		type: UriScalar,
		description: 'Canonical URL for other concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-other).'
	},
	target_system: {
		type: UriScalar,
		description: 'System of the target (if necessary) (See http://hl7.org/fhir/SearchParameter/ConceptMap-target-system).'
	},
	dependson: {
		type: UriScalar,
		description: 'Reference to property mapping depends on (See http://hl7.org/fhir/SearchParameter/ConceptMap-dependson).'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-jurisdiction).'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-description).'
	},
	source: {
		type: GraphQLString,
		description: 'Identifies the source of the concepts which are being mapped (See http://hl7.org/fhir/SearchParameter/ConceptMap-source).'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-title).'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-version).'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-url).'
	},
	target: {
		type: GraphQLString,
		description: 'Provides context to the mappings (See http://hl7.org/fhir/SearchParameter/ConceptMap-target).'
	},
	source_code: {
		type: TokenScalar,
		description: 'Identifies element being mapped (See http://hl7.org/fhir/SearchParameter/ConceptMap-source-code).'
	},
	source_uri: {
		type: GraphQLString,
		description: 'Identifies the source of the concepts which are being mapped (See http://hl7.org/fhir/SearchParameter/ConceptMap-source-uri).'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-name).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-publisher).'
	},
	source_system: {
		type: UriScalar,
		description: 'Code System (if value set crosses code systems) (See http://hl7.org/fhir/SearchParameter/ConceptMap-source-system).'
	},
	target_code: {
		type: TokenScalar,
		description: 'Code that identifies the target element (See http://hl7.org/fhir/SearchParameter/ConceptMap-target-code).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the concept map (See http://hl7.org/fhir/SearchParameter/ConceptMap-status).'
	},
	target_uri: {
		type: GraphQLString,
		description: 'Provides context to the mappings (See http://hl7.org/fhir/SearchParameter/ConceptMap-target-uri).'
	}
};
