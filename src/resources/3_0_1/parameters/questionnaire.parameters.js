const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaire query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The questionnaire publication date. See http://hl7.org/fhir/SearchParameter/Questionnaire-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-identifier.'
	},
	effective: {
		type: DateScalar,
		description: 'The time during which the questionnaire is intended to be in use. See http://hl7.org/fhir/SearchParameter/Questionnaire-effective.'
	},
	code: {
		type: TokenScalar,
		description: 'A code that corresponds to one of its items in the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-code.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-jurisdiction.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-name.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-description.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-publisher.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-title.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-url.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the questionnaire. See http://hl7.org/fhir/SearchParameter/Questionnaire-status.'
	}
};
