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
		description: 'The author of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored
	authored: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'QuestionnaireResponse.authored',
		description: 'When the questionnaire was authored',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.encounter',
		description: 'Encounter during which questionnaire was authored',
	},
	// http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.subject',
		description: 'The patient that is the subject of the questionnaire',
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
		description: 'The person who answered the questions',
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
		description: 'The subject of the questionnaire',
	},
};
