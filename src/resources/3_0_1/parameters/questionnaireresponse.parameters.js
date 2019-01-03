const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaireresponse query
 */
module.exports = {
	authored: {
		type: DateScalar,
		description:
			'When the questionnaire response was last changed (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'The unique identifier for the questionnaire response (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-identifier).',
	},
	parent: {
		type: GraphQLString,
		description:
			'Procedure or observation this questionnaire response was performed as a part of (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-parent).',
	},
	questionnaire: {
		type: GraphQLString,
		description:
			'The questionnaire the answers are provided for (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire).',
	},
	based_on: {
		type: GraphQLString,
		description:
			'Plan/proposal/order fulfilled by this questionnaire response (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-based-on).',
	},
	subject: {
		type: GraphQLString,
		description:
			'The subject of the questionnaire response (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-subject).',
	},
	author: {
		type: GraphQLString,
		description:
			'The author of the questionnaire response (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author).',
	},
	patient: {
		type: GraphQLString,
		description:
			'The patient that is the subject of the questionnaire response (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient).',
	},
	context: {
		type: GraphQLString,
		description:
			'Encounter or episode associated with the questionnaire response (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-context).',
	},
	source: {
		type: GraphQLString,
		description:
			'The individual providing the information reflected in the questionnaire respose (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-source).',
	},
	status: {
		type: TokenScalar,
		description:
			'The status of the questionnaire response (See http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status).',
	},
};
