const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaire query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Questionnaire-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.item.code',
		description:
			'A code that corresponds to one of its items in the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.useContext.valueCodeableConcept',
		description: 'A use context assigned to the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Questionnaire.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.useContext.code',
		description: 'A type of use context assigned to the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Questionnaire.date',
		description: 'The questionnaire publication date',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-definition
	definition: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Questionnaire.item.definition',
		description: 'ElementDefinition - details for the item',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Questionnaire.description',
		description: 'The description of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Questionnaire.effectivePeriod',
		description:
			'The time during which the questionnaire is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.identifier',
		description: 'External identifier for the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.jurisdiction',
		description: 'Intended jurisdiction for the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Questionnaire.name',
		description: 'Computationally friendly name of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Questionnaire.publisher',
		description: 'Name of the publisher of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.status',
		description: 'The current status of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-subject-type
	subject_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.subjectType',
		description: 'Resource that can be subject of QuestionnaireResponse',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Questionnaire.title',
		description: 'The human-friendly name of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Questionnaire.url',
		description: 'The uri that identifies the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.version',
		description: 'The business version of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A use context type and value assigned to the questionnaire',
	},
};
