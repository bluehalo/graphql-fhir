const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the requestgroup query
 */
module.exports = {
	authored: {
		type: DateScalar,
		description:
			'The date the request group was authored (See http://hl7.org/fhir/SearchParameter/RequestGroup-authored).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'External identifiers for the request group (See http://hl7.org/fhir/SearchParameter/RequestGroup-identifier).',
	},
	subject: {
		type: GraphQLString,
		description:
			'The subject that the request group is about (See http://hl7.org/fhir/SearchParameter/RequestGroup-subject).',
	},
	author: {
		type: GraphQLString,
		description:
			'The author of the request group (See http://hl7.org/fhir/SearchParameter/RequestGroup-author).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'The encounter the request group applies to (See http://hl7.org/fhir/SearchParameter/RequestGroup-encounter).',
	},
	priority: {
		type: TokenScalar,
		description:
			'The priority of the request group (See http://hl7.org/fhir/SearchParameter/RequestGroup-priority).',
	},
	intent: {
		type: TokenScalar,
		description:
			'The intent of the request group (See http://hl7.org/fhir/SearchParameter/RequestGroup-intent).',
	},
	participant: {
		type: GraphQLString,
		description:
			'The participant in the requests in the group (See http://hl7.org/fhir/SearchParameter/RequestGroup-participant).',
	},
	group_identifier: {
		type: TokenScalar,
		description:
			'The group identifier for the request group (See http://hl7.org/fhir/SearchParameter/RequestGroup-group-identifier).',
	},
	patient: {
		type: GraphQLString,
		description:
			'The identity of a patient to search for request groups (See http://hl7.org/fhir/SearchParameter/RequestGroup-patient).',
	},
	context: {
		type: GraphQLString,
		description:
			'The context the request group applies to (See http://hl7.org/fhir/SearchParameter/RequestGroup-context).',
	},
	definition: {
		type: GraphQLString,
		description:
			'The definition from which the request group is realized (See http://hl7.org/fhir/SearchParameter/RequestGroup-definition).',
	},
	status: {
		type: TokenScalar,
		description:
			'The status of the request group (See http://hl7.org/fhir/SearchParameter/RequestGroup-status).',
	},
};
