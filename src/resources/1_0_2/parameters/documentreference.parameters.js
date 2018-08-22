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
	related_ref: {
		type: GraphQLString,
		description: 'Related Resource. See http://hl7.org/fhir/SearchParameter/documentreference-related-ref.'
	},
	related_id: {
		type: TokenScalar,
		description: 'Identifier of related objects or events. See http://hl7.org/fhir/SearchParameter/documentreference-related-id.'
	},
	indexed: {
		type: DateScalar,
		description: 'When this document reference created. See http://hl7.org/fhir/SearchParameter/documentreference-indexed.'
	},
	location: {
		type: UriScalar,
		description: 'Uri where the data can be found. See http://hl7.org/fhir/SearchParameter/documentreference-location.'
	},
	relatesto: {
		type: GraphQLString,
		description: 'Target of the relationship. See http://hl7.org/fhir/SearchParameter/documentreference-relatesto.'
	},
	subject: {
		type: GraphQLString,
		description: 'Who/what is the subject of the document. See http://hl7.org/fhir/SearchParameter/documentreference-subject.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Context of the document  content. See http://hl7.org/fhir/SearchParameter/documentreference-encounter.'
	},
	type: {
		type: TokenScalar,
		description: 'Kind of document (LOINC if possible). See http://hl7.org/fhir/SearchParameter/documentreference-type.'
	},
	securitylabel: {
		type: TokenScalar,
		description: 'Document security-tags. See http://hl7.org/fhir/SearchParameter/documentreference-securitylabel.'
	},
	setting: {
		type: TokenScalar,
		description: 'Additional details about where the content was created (e.g. clinical specialty). See http://hl7.org/fhir/SearchParameter/documentreference-setting.'
	},
	author: {
		type: GraphQLString,
		description: 'Who and/or what authored the document. See http://hl7.org/fhir/SearchParameter/documentreference-author.'
	},
	custodian: {
		type: GraphQLString,
		description: 'Organization which maintains the document. See http://hl7.org/fhir/SearchParameter/documentreference-custodian.'
	},
	patient: {
		type: GraphQLString,
		description: 'Who/what is the subject of the document. See http://hl7.org/fhir/SearchParameter/documentreference-patient.'
	},
	facility: {
		type: TokenScalar,
		description: 'Kind of facility where patient was seen. See http://hl7.org/fhir/SearchParameter/documentreference-facility.'
	},
	created: {
		type: DateScalar,
		description: 'Document creation time. See http://hl7.org/fhir/SearchParameter/documentreference-created.'
	},
	description: {
		type: GraphQLString,
		description: 'Human-readable description (title). See http://hl7.org/fhir/SearchParameter/documentreference-description.'
	},
	event: {
		type: TokenScalar,
		description: 'Main Clinical Acts Documented. See http://hl7.org/fhir/SearchParameter/documentreference-event.'
	},
	status: {
		type: TokenScalar,
		description: 'current | superseded | entered-in-error. See http://hl7.org/fhir/SearchParameter/documentreference-status.'
	},
	relation: {
		type: TokenScalar,
		description: 'replaces | transforms | signs | appends. See http://hl7.org/fhir/SearchParameter/documentreference-relation.'
	},
	class: {
		type: TokenScalar,
		description: 'Categorization of document. See http://hl7.org/fhir/SearchParameter/documentreference-class.'
	},
	format: {
		type: TokenScalar,
		description: 'Format/content rules for the document. See http://hl7.org/fhir/SearchParameter/documentreference-format.'
	},
	period: {
		type: DateScalar,
		description: 'Time of service that is being documented. See http://hl7.org/fhir/SearchParameter/documentreference-period.'
	},
	authenticator: {
		type: GraphQLString,
		description: 'Who/what authenticated the document. See http://hl7.org/fhir/SearchParameter/documentreference-authenticator.'
	},
	relationship: {
		type: GraphQLString,
		description: 'Combination of relation and relatesTo. See http://hl7.org/fhir/SearchParameter/documentreference-relationship.'
	},
	language: {
		type: TokenScalar,
		description: 'Human language of the content (BCP-47). See http://hl7.org/fhir/SearchParameter/documentreference-language.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Master Version Specific Identifier. See http://hl7.org/fhir/SearchParameter/documentreference-identifier.'
	}
};
