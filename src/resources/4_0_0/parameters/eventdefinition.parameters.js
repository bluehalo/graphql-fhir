const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the eventdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EventDefinition-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"EventDefinition.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EventDefinition.useContext.valueCodeableConcept',
		description: 'A use context assigned to the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'EventDefinition.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EventDefinition.useContext.code',
		description: 'A type of use context assigned to the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EventDefinition.date',
		description: 'The event definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "EventDefinition.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"EventDefinition.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EventDefinition.description',
		description: 'The description of the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EventDefinition.effectivePeriod',
		description:
			'The time during which the event definition is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EventDefinition.identifier',
		description: 'External identifier for the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EventDefinition.jurisdiction',
		description: 'Intended jurisdiction for the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EventDefinition.name',
		description: 'Computationally friendly name of the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"EventDefinition.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EventDefinition.publisher',
		description: 'Name of the publisher of the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EventDefinition.status',
		description: 'The current status of the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "EventDefinition.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EventDefinition.title',
		description: 'The human-friendly name of the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EventDefinition.topic',
		description: 'Topics associated with the module',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'EventDefinition.url',
		description: 'The uri that identifies the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EventDefinition.version',
		description: 'The business version of the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the event definition',
	},
	// http://hl7.org/fhir/SearchParameter/EventDefinition-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the event definition',
	},
};
