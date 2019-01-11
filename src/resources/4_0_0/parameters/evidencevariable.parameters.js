const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the evidencevariable query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"EvidenceVariable.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EvidenceVariable.useContext.valueCodeableConcept',
		description: 'A use context assigned to the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'EvidenceVariable.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EvidenceVariable.useContext.code',
		description: 'A type of use context assigned to the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EvidenceVariable.date',
		description: 'The evidence variable publication date',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"EvidenceVariable.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"EvidenceVariable.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EvidenceVariable.description',
		description: 'The description of the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EvidenceVariable.effectivePeriod',
		description:
			'The time during which the evidence variable is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EvidenceVariable.identifier',
		description: 'External identifier for the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EvidenceVariable.jurisdiction',
		description: 'Intended jurisdiction for the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EvidenceVariable.name',
		description: 'Computationally friendly name of the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath:
			"EvidenceVariable.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EvidenceVariable.publisher',
		description: 'Name of the publisher of the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EvidenceVariable.status',
		description: 'The current status of the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "EvidenceVariable.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EvidenceVariable.title',
		description: 'The human-friendly name of the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EvidenceVariable.topic',
		description: 'Topics associated with the EvidenceVariable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'EvidenceVariable.url',
		description: 'The uri that identifies the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EvidenceVariable.version',
		description: 'The business version of the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the evidence variable',
	},
	// http://hl7.org/fhir/SearchParameter/EvidenceVariable-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the evidence variable',
	},
};
