const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the documentreference query
 */
module.exports = {
	securitylabel: {
		type: TokenScalar,
		description:
			'Document security-tags (See http://hl7.org/fhir/SearchParameter/DocumentReference-securitylabel).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who/what is the subject of the document (See http://hl7.org/fhir/SearchParameter/DocumentReference-subject).',
	},
	description: {
		type: GraphQLString,
		description:
			'Human-readable description (title) (See http://hl7.org/fhir/SearchParameter/DocumentReference-description).',
	},
	language: {
		type: TokenScalar,
		description:
			'Human language of the content (BCP-47) (See http://hl7.org/fhir/SearchParameter/DocumentReference-language).',
	},
	type: {
		type: TokenScalar,
		description:
			'Kind of document (LOINC if possible) (See http://hl7.org/fhir/SearchParameter/clinical-type).',
	},
	relation: {
		type: TokenScalar,
		description:
			'replaces | transforms | signs | appends (See http://hl7.org/fhir/SearchParameter/DocumentReference-relation).',
	},
	setting: {
		type: TokenScalar,
		description:
			'Additional details about where the content was created (e.g. clinical specialty) (See http://hl7.org/fhir/SearchParameter/DocumentReference-setting).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who/what is the subject of the document (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	relationship: {
		type: GraphQLString,
		description:
			'Combination of relation and relatesTo (See http://hl7.org/fhir/SearchParameter/DocumentReference-relationship).',
	},
	event: {
		type: TokenScalar,
		description:
			'Main clinical acts documented (See http://hl7.org/fhir/SearchParameter/DocumentReference-event).',
	},
	class: {
		type: TokenScalar,
		description:
			'Categorization of document (See http://hl7.org/fhir/SearchParameter/DocumentReference-class).',
	},
	authenticator: {
		type: GraphQLString,
		description:
			'Who/what authenticated the document (See http://hl7.org/fhir/SearchParameter/DocumentReference-authenticator).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Master Version Specific Identifier (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	period: {
		type: DateScalar,
		description:
			'Time of service that is being documented (See http://hl7.org/fhir/SearchParameter/DocumentReference-period).',
	},
	related_id: {
		type: TokenScalar,
		description:
			'Identifier of related objects or events (See http://hl7.org/fhir/SearchParameter/DocumentReference-related-id).',
	},
	custodian: {
		type: GraphQLString,
		description:
			'Organization which maintains the document (See http://hl7.org/fhir/SearchParameter/DocumentReference-custodian).',
	},
	indexed: {
		type: DateScalar,
		description:
			'When this document reference was created (See http://hl7.org/fhir/SearchParameter/DocumentReference-indexed).',
	},
	author: {
		type: GraphQLString,
		description:
			'Who and/or what authored the document (See http://hl7.org/fhir/SearchParameter/DocumentReference-author).',
	},
	created: {
		type: DateScalar,
		description:
			'Document creation time (See http://hl7.org/fhir/SearchParameter/DocumentReference-created).',
	},
	format: {
		type: TokenScalar,
		description:
			'Format/content rules for the document (See http://hl7.org/fhir/SearchParameter/DocumentReference-format).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Context of the document  content (See http://hl7.org/fhir/SearchParameter/clinical-encounter).',
	},
	related_ref: {
		type: GraphQLString,
		description:
			'Related Resource (See http://hl7.org/fhir/SearchParameter/DocumentReference-related-ref).',
	},
	location: {
		type: UriScalar,
		description:
			'Uri where the data can be found (See http://hl7.org/fhir/SearchParameter/DocumentReference-location).',
	},
	relatesto: {
		type: GraphQLString,
		description:
			'Target of the relationship (See http://hl7.org/fhir/SearchParameter/DocumentReference-relatesto).',
	},
	facility: {
		type: TokenScalar,
		description:
			'Kind of facility where patient was seen (See http://hl7.org/fhir/SearchParameter/DocumentReference-facility).',
	},
	status: {
		type: TokenScalar,
		description:
			'current | superseded | entered-in-error (See http://hl7.org/fhir/SearchParameter/DocumentReference-status).',
	},
};
