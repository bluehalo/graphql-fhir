const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaireresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.author',
		description: 'The author of the questionnaire response',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored
	authored: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'QuestionnaireResponse.authored',
		description: 'When the questionnaire response was last changed',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.basedOn',
		description: 'Plan/proposal/order fulfilled by this questionnaire response',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.context',
		description:
			'Encounter or episode associated with the questionnaire response',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'QuestionnaireResponse.identifier',
		description: 'The unique identifier for the questionnaire response',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-parent
	parent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.parent',
		description:
			'Procedure or observation this questionnaire response was performed as a part of',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.subject',
		description:
			'The patient that is the subject of the questionnaire response',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire
	questionnaire: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.questionnaire',
		description: 'The questionnaire the answers are provided for',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.source',
		description:
			'The individual providing the information reflected in the questionnaire respose',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'QuestionnaireResponse.status',
		description: 'The status of the questionnaire response',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.subject',
		description: 'The subject of the questionnaire response',
	},
};
