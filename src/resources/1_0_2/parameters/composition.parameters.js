const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the composition query
 */
module.exports = {
	status: {
		type: TokenScalar,
		description:
			'preliminary | final | amended | entered-in-error (See http://hl7.org/fhir/SearchParameter/composition-status).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who and/or what the composition is about (See http://hl7.org/fhir/SearchParameter/composition-subject).',
	},
	class: {
		type: TokenScalar,
		description:
			'Categorization of Composition (See http://hl7.org/fhir/SearchParameter/composition-class).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Context of the Composition (See http://hl7.org/fhir/SearchParameter/composition-encounter).',
	},
	period: {
		type: DateScalar,
		description:
			'The period covered by the documentation (See http://hl7.org/fhir/SearchParameter/composition-period).',
	},
	type: {
		type: TokenScalar,
		description:
			'Kind of composition (LOINC if possible) (See http://hl7.org/fhir/SearchParameter/composition-type).',
	},
	date: {
		type: DateScalar,
		description:
			'Composition editing time (See http://hl7.org/fhir/SearchParameter/composition-date).',
	},
	section: {
		type: TokenScalar,
		description:
			'Classification of section (recommended) (See http://hl7.org/fhir/SearchParameter/composition-section).',
	},
	author: {
		type: GraphQLString,
		description:
			'Who and/or what authored the composition (See http://hl7.org/fhir/SearchParameter/composition-author).',
	},
	title: {
		type: GraphQLString,
		description:
			'Human Readable name/title (See http://hl7.org/fhir/SearchParameter/composition-title).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who and/or what the composition is about (See http://hl7.org/fhir/SearchParameter/composition-patient).',
	},
	confidentiality: {
		type: TokenScalar,
		description:
			'As defined by affinity domain (See http://hl7.org/fhir/SearchParameter/composition-confidentiality).',
	},
	attester: {
		type: GraphQLString,
		description:
			'Who attested the composition (See http://hl7.org/fhir/SearchParameter/composition-attester).',
	},
	entry: {
		type: GraphQLString,
		description:
			'A reference to data that supports this section (See http://hl7.org/fhir/SearchParameter/composition-entry).',
	},
	context: {
		type: TokenScalar,
		description:
			'Code(s) that apply to the event being documented (See http://hl7.org/fhir/SearchParameter/composition-context).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Logical identifier of composition (version-independent) (See http://hl7.org/fhir/SearchParameter/composition-identifier).',
	},
};
