const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the researchdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchDefinition.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchDefinition.useContext.valueCodeableConcept',
		description: 'A use context assigned to the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'ResearchDefinition.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchDefinition.useContext.code',
		description: 'A type of use context assigned to the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ResearchDefinition.date',
		description: 'The research definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchDefinition.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchDefinition.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchDefinition.description',
		description: 'The description of the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ResearchDefinition.effectivePeriod',
		description:
			'The time during which the research definition is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchDefinition.identifier',
		description: 'External identifier for the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchDefinition.jurisdiction',
		description: 'Intended jurisdiction for the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchDefinition.name',
		description: 'Computationally friendly name of the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchDefinition.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchDefinition.publisher',
		description: 'Name of the publisher of the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchDefinition.status',
		description: 'The current status of the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchDefinition.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchDefinition.title',
		description: 'The human-friendly name of the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchDefinition.topic',
		description: 'Topics associated with the ResearchDefinition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ResearchDefinition.url',
		description: 'The uri that identifies the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchDefinition.version',
		description: 'The business version of the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the research definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchDefinition-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the research definition',
	},
};
