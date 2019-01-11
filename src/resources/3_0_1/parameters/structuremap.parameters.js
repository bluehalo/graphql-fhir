const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the structuremap query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/StructureMap-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'StructureMap.date',
		description: 'The structure map publication date',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureMap.description',
		description: 'The description of the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureMap.identifier',
		description: 'External identifier for the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureMap.jurisdiction',
		description: 'Intended jurisdiction for the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureMap.name',
		description: 'Computationally friendly name of the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureMap.publisher',
		description: 'Name of the publisher of the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureMap.status',
		description: 'The current status of the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'StructureMap.title',
		description: 'The human-friendly name of the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'StructureMap.url',
		description: 'The uri that identifies the structure map',
	},
	// http://hl7.org/fhir/SearchParameter/StructureMap-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'StructureMap.version',
		description: 'The business version of the structure map',
	},
};
