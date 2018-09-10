const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the structuremap query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The structure map publication date (See http://hl7.org/fhir/SearchParameter/StructureMap-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-identifier).'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-jurisdiction).'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-name).'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-description).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-publisher).'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-title).'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-version).'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-url).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the structure map (See http://hl7.org/fhir/SearchParameter/StructureMap-status).'
	}
};
