const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the servicedefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The service definition publication date (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-identifier).'
	},
	successor: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-successor).'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-jurisdiction).'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-description).'
	},
	derived_from: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-derived-from).'
	},
	predecessor: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-predecessor).'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-title).'
	},
	composed_of: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-composed-of).'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-version).'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-url).'
	},
	effective: {
		type: DateScalar,
		description: 'The time during which the service definition is intended to be in use (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-effective).'
	},
	depends_on: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-depends-on).'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-name).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-publisher).'
	},
	topic: {
		type: TokenScalar,
		description: 'Topics associated with the module (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-topic).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the service definition (See http://hl7.org/fhir/SearchParameter/ServiceDefinition-status).'
	}
};
