const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the list query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/List-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'List.code',
		description: 'What the purpose of this list is',
	},
	// http://hl7.org/fhir/SearchParameter/List-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'List.date',
		description: 'When the list was prepared',
	},
	// http://hl7.org/fhir/SearchParameter/List-empty-reason
	empty_reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'List.emptyReason',
		description: 'Why list is empty',
	},
	// http://hl7.org/fhir/SearchParameter/List-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'List.encounter',
		description: 'Context in which list created',
	},
	// http://hl7.org/fhir/SearchParameter/List-item
	item: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'List.entry.item',
		description: 'Actual entry',
	},
	// http://hl7.org/fhir/SearchParameter/List-notes
	notes: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'List.note',
		description: 'Comments about the list',
	},
	// http://hl7.org/fhir/SearchParameter/List-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'List.subject',
		description: 'If all resources have the same subject',
	},
	// http://hl7.org/fhir/SearchParameter/List-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'List.source',
		description: 'Who and/or what defined the list contents (aka Author)',
	},
	// http://hl7.org/fhir/SearchParameter/List-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'List.status',
		description: 'current | retired | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/List-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'List.subject',
		description: 'If all resources have the same subject',
	},
	// http://hl7.org/fhir/SearchParameter/List-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'List.title',
		description: 'Descriptive name for the list',
	},
};
