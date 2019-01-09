const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the composition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Composition-attester
	attester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Composition.attester.party',
		description: 'Who attested the composition',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Composition.author',
		description: 'Who and/or what authored the composition',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-class
	class: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Composition.class',
		description: 'Categorization of Composition',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-confidentiality
	confidentiality: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Composition.confidentiality',
		description: 'As defined by affinity domain',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Composition.event.code',
		description: 'Code(s) that apply to the event being documented',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Composition.date',
		description: 'Composition editing time',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Composition.encounter',
		description: 'Context of the Composition',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-entry
	entry: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Composition.section.entry',
		description: 'A reference to data that supports this section',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Composition.identifier',
		description: 'Logical identifier of composition (version-independent)',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Composition.subject',
		description: 'Who and/or what the composition is about',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Composition.event.period',
		description: 'The period covered by the documentation',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-section
	section: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Composition.section.code',
		description: 'Classification of section (recommended)',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Composition.status',
		description: 'preliminary | final | amended | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Composition.subject',
		description: 'Who and/or what the composition is about',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Composition.title',
		description: 'Human Readable name/title',
	},
	// http://hl7.org/fhir/SearchParameter/Composition-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Composition.type',
		description: 'Kind of composition (LOINC if possible)',
	},
};
