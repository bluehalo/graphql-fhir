const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the activitydefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ActivityDefinition.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ActivityDefinition.useContext.valueCodeableConcept',
		description: 'A use context assigned to the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'ActivityDefinition.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ActivityDefinition.useContext.code',
		description: 'A type of use context assigned to the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ActivityDefinition.date',
		description: 'The activity definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ActivityDefinition.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ActivityDefinition.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ActivityDefinition.description',
		description: 'The description of the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ActivityDefinition.effectivePeriod',
		description:
			'The time during which the activity definition is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ActivityDefinition.identifier',
		description: 'External identifier for the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ActivityDefinition.jurisdiction',
		description: 'Intended jurisdiction for the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ActivityDefinition.name',
		description: 'Computationally friendly name of the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ActivityDefinition.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ActivityDefinition.publisher',
		description: 'Name of the publisher of the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ActivityDefinition.status',
		description: 'The current status of the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ActivityDefinition.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ActivityDefinition.title',
		description: 'The human-friendly name of the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ActivityDefinition.topic',
		description: 'Topics associated with the module',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ActivityDefinition.url',
		description: 'The uri that identifies the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ActivityDefinition.version',
		description: 'The business version of the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the activity definition',
	},
	// http://hl7.org/fhir/SearchParameter/ActivityDefinition-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the activity definition',
	},
};
