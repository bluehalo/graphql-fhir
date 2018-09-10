const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaireresponse query
 */
module.exports = {
	author: {
		type: GraphQLString,
		description: 'The author of the questionnaire (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-author).'
	},
	questionnaire: {
		type: GraphQLString,
		description: 'The questionnaire the answers are provided for (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-questionnaire).'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient that is the subject of the questionnaire (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-patient).'
	},
	authored: {
		type: DateScalar,
		description: 'When the questionnaire was authored (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-authored).'
	},
	source: {
		type: GraphQLString,
		description: 'The person who answered the questions (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-source).'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the questionnaire response (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-status).'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject of the questionnaire (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-subject).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter during which questionnaire was authored (See http://hl7.org/fhir/SearchParameter/questionnaireresponse-encounter).'
	}
};
