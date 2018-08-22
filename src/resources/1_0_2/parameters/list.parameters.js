const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the list query
 */
module.exports = {
	title: {
		type: GraphQLString,
		description: 'Descriptive name for the list. See http://hl7.org/fhir/SearchParameter/list-title.'
	},
	patient: {
		type: GraphQLString,
		description: 'If all resources have the same subject. See http://hl7.org/fhir/SearchParameter/list-patient.'
	},
	source: {
		type: GraphQLString,
		description: 'Who and/or what defined the list contents (aka Author). See http://hl7.org/fhir/SearchParameter/list-source.'
	},
	status: {
		type: TokenScalar,
		description: 'current | retired | entered-in-error. See http://hl7.org/fhir/SearchParameter/list-status.'
	},
	subject: {
		type: GraphQLString,
		description: 'If all resources have the same subject. See http://hl7.org/fhir/SearchParameter/list-subject.'
	},
	item: {
		type: GraphQLString,
		description: 'Actual entry. See http://hl7.org/fhir/SearchParameter/list-item.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Context in which list created. See http://hl7.org/fhir/SearchParameter/list-encounter.'
	},
	code: {
		type: TokenScalar,
		description: 'What the purpose of this list is. See http://hl7.org/fhir/SearchParameter/list-code.'
	},
	notes: {
		type: GraphQLString,
		description: 'Comments about the list. See http://hl7.org/fhir/SearchParameter/list-notes.'
	},
	date: {
		type: DateScalar,
		description: 'When the list was prepared. See http://hl7.org/fhir/SearchParameter/list-date.'
	},
	empty_reason: {
		type: TokenScalar,
		description: 'Why list is empty. See http://hl7.org/fhir/SearchParameter/list-empty-reason.'
	}
};
