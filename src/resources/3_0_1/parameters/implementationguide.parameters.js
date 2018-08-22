const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the implementationguide query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The implementation guide publication date. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-date.'
	},
	dependency: {
		type: UriScalar,
		description: 'Where to find dependency. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-dependency.'
	},
	resource: {
		type: GraphQLString,
		description: 'Location of the resource. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the implementation guide. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-jurisdiction.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the implementation guide. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-name.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the implementation guide. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-description.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the implementation guide. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-publisher.'
	},
	experimental: {
		type: TokenScalar,
		description: 'For testing purposes, not real usage. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the implementation guide. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the implementation guide. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-url.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the implementation guide. See http://hl7.org/fhir/SearchParameter/ImplementationGuide-status.'
	}
};
