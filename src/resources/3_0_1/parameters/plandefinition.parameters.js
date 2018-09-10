const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the plandefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The plan definition publication date (See http://hl7.org/fhir/SearchParameter/PlanDefinition-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-identifier).'
	},
	successor: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/PlanDefinition-successor).'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-jurisdiction).'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-description).'
	},
	derived_from: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/PlanDefinition-derived-from).'
	},
	predecessor: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/PlanDefinition-predecessor).'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-title).'
	},
	composed_of: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/PlanDefinition-composed-of).'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-version).'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-url).'
	},
	effective: {
		type: DateScalar,
		description: 'The time during which the plan definition is intended to be in use (See http://hl7.org/fhir/SearchParameter/PlanDefinition-effective).'
	},
	depends_on: {
		type: GraphQLString,
		description: 'What resource is being referenced (See http://hl7.org/fhir/SearchParameter/PlanDefinition-depends-on).'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-name).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-publisher).'
	},
	topic: {
		type: TokenScalar,
		description: 'Topics associated with the module (See http://hl7.org/fhir/SearchParameter/PlanDefinition-topic).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the plan definition (See http://hl7.org/fhir/SearchParameter/PlanDefinition-status).'
	}
};
