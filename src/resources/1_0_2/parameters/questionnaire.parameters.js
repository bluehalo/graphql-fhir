const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaire query
 */
module.exports = {
	title: {
		type: GraphQLString,
		description: 'All or part of the name of the questionnaire (title for the root group of the questionnaire). See http://hl7.org/fhir/SearchParameter/questionnaire-title.'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the questionnaire. See http://hl7.org/fhir/SearchParameter/questionnaire-status.'
	},
	code: {
		type: TokenScalar,
		description: 'A code that corresponds to the questionnaire or one of its groups. See http://hl7.org/fhir/SearchParameter/questionnaire-code.'
	},
	date: {
		type: DateScalar,
		description: 'When the questionnaire was last changed. See http://hl7.org/fhir/SearchParameter/questionnaire-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'An identifier for the questionnaire. See http://hl7.org/fhir/SearchParameter/questionnaire-identifier.'
	},
	version: {
		type: GraphQLString,
		description: 'The business version of the questionnaire. See http://hl7.org/fhir/SearchParameter/questionnaire-version.'
	},
	publisher: {
		type: GraphQLString,
		description: 'The author of the questionnaire. See http://hl7.org/fhir/SearchParameter/questionnaire-publisher.'
	}
};
