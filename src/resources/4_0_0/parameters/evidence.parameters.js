const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the evidence query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Evidence-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Evidence.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Evidence.useContext.valueCodeableConcept',
		description: 'A use context assigned to the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Evidence.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Evidence.useContext.code',
		description: 'A type of use context assigned to the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Evidence.date',
		description: 'The evidence publication date',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Evidence.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Evidence.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Evidence.description',
		description: 'The description of the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Evidence.effectivePeriod',
		description: 'The time during which the evidence is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Evidence.identifier',
		description: 'External identifier for the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Evidence.jurisdiction',
		description: 'Intended jurisdiction for the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Evidence.name',
		description: 'Computationally friendly name of the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Evidence.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Evidence.publisher',
		description: 'Name of the publisher of the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Evidence.status',
		description: 'The current status of the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Evidence.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Evidence.title',
		description: 'The human-friendly name of the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Evidence.topic',
		description: 'Topics associated with the Evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Evidence.url',
		description: 'The uri that identifies the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Evidence.version',
		description: 'The business version of the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the evidence',
	},
	// http://hl7.org/fhir/SearchParameter/Evidence-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A use context type and value assigned to the evidence',
	},
};
