const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the measure query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Measure-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Measure.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Measure.useContext.valueCodeableConcept',
		description: 'A use context assigned to the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Measure.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Measure.useContext.code',
		description: 'A type of use context assigned to the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Measure.date',
		description: 'The measure publication date',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Measure.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Measure.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Measure.description',
		description: 'The description of the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Measure.effectivePeriod',
		description: 'The time during which the measure is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Measure.identifier',
		description: 'External identifier for the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Measure.jurisdiction',
		description: 'Intended jurisdiction for the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Measure.name',
		description: 'Computationally friendly name of the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Measure.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Measure.publisher',
		description: 'Name of the publisher of the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Measure.status',
		description: 'The current status of the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Measure.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Measure.title',
		description: 'The human-friendly name of the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Measure.topic',
		description: 'Topics associated with the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Measure.url',
		description: 'The uri that identifies the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Measure.version',
		description: 'The business version of the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the measure',
	},
	// http://hl7.org/fhir/SearchParameter/Measure-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A use context type and value assigned to the measure',
	},
};
