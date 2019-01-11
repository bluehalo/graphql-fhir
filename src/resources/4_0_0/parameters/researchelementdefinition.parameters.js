const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the researchelementdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchElementDefinition.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchElementDefinition.useContext.valueCodeableConcept',
		description: 'A use context assigned to the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'ResearchElementDefinition.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchElementDefinition.useContext.code',
		description:
			'A type of use context assigned to the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ResearchElementDefinition.date',
		description: 'The research element definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchElementDefinition.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchElementDefinition.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchElementDefinition.description',
		description: 'The description of the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ResearchElementDefinition.effectivePeriod',
		description:
			'The time during which the research element definition is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchElementDefinition.identifier',
		description: 'External identifier for the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchElementDefinition.jurisdiction',
		description: 'Intended jurisdiction for the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchElementDefinition.name',
		description:
			'Computationally friendly name of the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchElementDefinition.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchElementDefinition.publisher',
		description: 'Name of the publisher of the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchElementDefinition.status',
		description: 'The current status of the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"ResearchElementDefinition.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchElementDefinition.title',
		description: 'The human-friendly name of the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchElementDefinition.topic',
		description: 'Topics associated with the ResearchElementDefinition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ResearchElementDefinition.url',
		description: 'The uri that identifies the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchElementDefinition.version',
		description: 'The business version of the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the research element definition',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchElementDefinition-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the research element definition',
	},
};
