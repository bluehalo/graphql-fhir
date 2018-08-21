const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the graphdefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The graph definition publication date. See http://hl7.org/fhir/SearchParameter/GraphDefinition-date.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the graph definition. See http://hl7.org/fhir/SearchParameter/GraphDefinition-jurisdiction.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the graph definition. See http://hl7.org/fhir/SearchParameter/GraphDefinition-name.'
	},
	start: {
		type: TokenScalar,
		description: 'Type of resource at which the graph starts. See http://hl7.org/fhir/SearchParameter/GraphDefinition-start.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the graph definition. See http://hl7.org/fhir/SearchParameter/GraphDefinition-description.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the graph definition. See http://hl7.org/fhir/SearchParameter/GraphDefinition-publisher.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the graph definition. See http://hl7.org/fhir/SearchParameter/GraphDefinition-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the graph definition. See http://hl7.org/fhir/SearchParameter/GraphDefinition-url.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the graph definition. See http://hl7.org/fhir/SearchParameter/GraphDefinition-status.'
	}
};
