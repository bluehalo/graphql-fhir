const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the activitydefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The activity definition publication date. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-identifier.'
	},
	successor: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-successor.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-jurisdiction.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-description.'
	},
	derived_from: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-derived-from.'
	},
	predecessor: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-predecessor.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-title.'
	},
	composed_of: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-composed-of.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-url.'
	},
	effective: {
		type: DateScalar,
		description: 'The time during which the activity definition is intended to be in use. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-effective.'
	},
	depends_on: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-depends-on.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-publisher.'
	},
	topic: {
		type: TokenScalar,
		description: 'Topics associated with the module. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-topic.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the activity definition. See http://hl7.org/fhir/SearchParameter/ActivityDefinition-status.'
	}
};
