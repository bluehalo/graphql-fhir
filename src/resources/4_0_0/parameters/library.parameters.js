const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the library query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Library-composed-of
	composed_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Library.relatedArtifact[type/@value='composed-of'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Library-content-type
	content_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.content.contentType',
		description: 'The type of content in the library (e.g. text/cql)',
	},
	// http://hl7.org/fhir/SearchParameter/Library-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.useContext.valueCodeableConcept',
		description: 'A use context assigned to the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Library.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.useContext.code',
		description: 'A type of use context assigned to the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Library.date',
		description: 'The library publication date',
	},
	// http://hl7.org/fhir/SearchParameter/Library-depends-on
	depends_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Library.relatedArtifact[type/@value='depends-on'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Library-derived-from
	derived_from: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Library.relatedArtifact[type/@value='derived-from'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Library-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Library.description',
		description: 'The description of the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Library.effectivePeriod',
		description: 'The time during which the library is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/Library-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.identifier',
		description: 'External identifier for the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.jurisdiction',
		description: 'Intended jurisdiction for the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Library.name',
		description: 'Computationally friendly name of the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-predecessor
	predecessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Library.relatedArtifact[type/@value='predecessor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Library-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Library.publisher',
		description: 'Name of the publisher of the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.status',
		description: 'The current status of the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-successor
	successor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: "Library.relatedArtifact[type/@value='successor'].resource",
		description: 'What resource is being referenced',
	},
	// http://hl7.org/fhir/SearchParameter/Library-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Library.title',
		description: 'The human-friendly name of the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-topic
	topic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.topic',
		description: 'Topics associated with the module',
	},
	// http://hl7.org/fhir/SearchParameter/Library-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.type',
		description:
			'The type of the library (e.g. logic-library, model-definition, asset-collection, module-definition)',
	},
	// http://hl7.org/fhir/SearchParameter/Library-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Library.url',
		description: 'The uri that identifies the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Library.version',
		description: 'The business version of the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the library',
	},
	// http://hl7.org/fhir/SearchParameter/Library-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A use context type and value assigned to the library',
	},
};
