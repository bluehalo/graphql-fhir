const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the graphdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'GraphDefinition.date',
		description: 'The graph definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'GraphDefinition.description',
		description: 'The description of the graph definition',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.jurisdiction',
		description: 'Intended jurisdiction for the graph definition',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'GraphDefinition.name',
		description: 'Computationally friendly name of the graph definition',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'GraphDefinition.publisher',
		description: 'Name of the publisher of the graph definition',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-start
	start: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.start',
		description: 'Type of resource at which the graph starts',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.status',
		description: 'The current status of the graph definition',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'GraphDefinition.url',
		description: 'The uri that identifies the graph definition',
	},
	// http://hl7.org/fhir/SearchParameter/GraphDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GraphDefinition.version',
		description: 'The business version of the graph definition',
	},
};
