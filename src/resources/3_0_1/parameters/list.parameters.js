const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the list query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'When the list was prepared (See http://hl7.org/fhir/SearchParameter/clinical-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Business identifier (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	item: {
		type: GraphQLString,
		description:
			'Actual entry (See http://hl7.org/fhir/SearchParameter/List-item).',
	},
	empty_reason: {
		type: TokenScalar,
		description:
			'Why list is empty (See http://hl7.org/fhir/SearchParameter/List-empty-reason).',
	},
	code: {
		type: TokenScalar,
		description:
			'What the purpose of this list is (See http://hl7.org/fhir/SearchParameter/clinical-code).',
	},
	notes: {
		type: GraphQLString,
		description:
			'The annotation  - text content (See http://hl7.org/fhir/SearchParameter/List-notes).',
	},
	subject: {
		type: GraphQLString,
		description:
			'If all resources have the same subject (See http://hl7.org/fhir/SearchParameter/List-subject).',
	},
	patient: {
		type: GraphQLString,
		description:
			'If all resources have the same subject (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	source: {
		type: GraphQLString,
		description:
			'Who and/or what defined the list contents (aka Author) (See http://hl7.org/fhir/SearchParameter/List-source).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Context in which list created (See http://hl7.org/fhir/SearchParameter/clinical-encounter).',
	},
	title: {
		type: GraphQLString,
		description:
			'Descriptive name for the list (See http://hl7.org/fhir/SearchParameter/List-title).',
	},
	status: {
		type: TokenScalar,
		description:
			'current | retired | entered-in-error (See http://hl7.org/fhir/SearchParameter/List-status).',
	},
};
