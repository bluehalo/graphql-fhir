const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the composition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'Composition editing time (See http://hl7.org/fhir/SearchParameter/clinical-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Logical identifier of composition (version-independent) (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	period: {
		type: DateScalar,
		description:
			'The period covered by the documentation (See http://hl7.org/fhir/SearchParameter/Composition-period).',
	},
	related_id: {
		type: TokenScalar,
		description:
			'Target of the relationship (See http://hl7.org/fhir/SearchParameter/Composition-related-id).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who and/or what the composition is about (See http://hl7.org/fhir/SearchParameter/Composition-subject).',
	},
	author: {
		type: GraphQLString,
		description:
			'Who and/or what authored the composition (See http://hl7.org/fhir/SearchParameter/Composition-author).',
	},
	confidentiality: {
		type: TokenScalar,
		description:
			'As defined by affinity domain (See http://hl7.org/fhir/SearchParameter/Composition-confidentiality).',
	},
	section: {
		type: TokenScalar,
		description:
			'Classification of section (recommended) (See http://hl7.org/fhir/SearchParameter/Composition-section).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Context of the Composition (See http://hl7.org/fhir/SearchParameter/clinical-encounter).',
	},
	type: {
		type: TokenScalar,
		description:
			'Kind of composition (LOINC if possible) (See http://hl7.org/fhir/SearchParameter/clinical-type).',
	},
	title: {
		type: GraphQLString,
		description:
			'Human Readable name/title (See http://hl7.org/fhir/SearchParameter/Composition-title).',
	},
	attester: {
		type: GraphQLString,
		description:
			'Who attested the composition (See http://hl7.org/fhir/SearchParameter/Composition-attester).',
	},
	entry: {
		type: GraphQLString,
		description:
			'A reference to data that supports this section (See http://hl7.org/fhir/SearchParameter/Composition-entry).',
	},
	related_ref: {
		type: GraphQLString,
		description:
			'Target of the relationship (See http://hl7.org/fhir/SearchParameter/Composition-related-ref).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who and/or what the composition is about (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	context: {
		type: TokenScalar,
		description:
			'Code(s) that apply to the event being documented (See http://hl7.org/fhir/SearchParameter/Composition-context).',
	},
	class: {
		type: TokenScalar,
		description:
			'Categorization of Composition (See http://hl7.org/fhir/SearchParameter/Composition-class).',
	},
	status: {
		type: TokenScalar,
		description:
			'preliminary | final | amended | entered-in-error (See http://hl7.org/fhir/SearchParameter/Composition-status).',
	},
};
