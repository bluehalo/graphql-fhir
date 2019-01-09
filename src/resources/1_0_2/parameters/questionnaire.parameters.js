const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

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
		xpath: 'Questionnaire.group.concept',
		description:
			'A code that corresponds to the questionnaire or one of its groups',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Questionnaire.date',
		description: 'When the questionnaire was last changed',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.identifier',
		description: 'An identifier for the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Questionnaire.publisher',
		description: 'The author of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Questionnaire.status',
		description: 'The status of the questionnaire',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Questionnaire.group.title',
		description:
			'All or part of the name of the questionnaire (title for the root group of the questionnaire)',
	},
	// http://hl7.org/fhir/SearchParameter/Questionnaire-version
	version: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Questionnaire.version',
		description: 'The business version of the questionnaire',
	},
};
