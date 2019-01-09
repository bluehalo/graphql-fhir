const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the documentreference query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DocumentReference-authenticator
	authenticator: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.authenticator',
		description: 'Who/what authenticated the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.author',
		description: 'Who and/or what authored the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-class
	class: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.class',
		description: 'Categorization of document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DocumentReference.created',
		description: 'Document creation time',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-custodian
	custodian: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.custodian',
		description: 'Organization which maintains the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DocumentReference.description',
		description: 'Human-readable description (title)',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.context.encounter',
		description: 'Context of the document  content',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-event
	event: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.event',
		description: 'Main Clinical Acts Documented',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-facility
	facility: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.facilityType',
		description: 'Kind of facility where patient was seen',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-format
	format: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.content.format',
		description: 'Format/content rules for the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.masterIdentifier',
		description: 'Master Version Specific Identifier',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-indexed
	indexed: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DocumentReference.indexed',
		description: 'When this document reference created',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-language
	language: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.content.attachment.language',
		description: 'Human language of the content (BCP-47)',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-location
	location: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'DocumentReference.content.attachment.url',
		description: 'Uri where the data can be found',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.subject',
		description: 'Who/what is the subject of the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DocumentReference.context.period',
		description: 'Time of service that is being documented',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-related-id
	related_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.related.identifier',
		description: 'Identifier of related objects or events',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-related-ref
	related_ref: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.context.related.ref',
		description: 'Related Resource',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-relatesto
	relatesto: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.relatesTo.target',
		description: 'Target of the relationship',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-relation
	relation: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.relatesTo.code',
		description: 'replaces | transforms | signs | appends',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-relationship
	relationship: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Combination of relation and relatesTo',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-securitylabel
	securitylabel: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.securityLabel',
		description: 'Document security-tags',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-setting
	setting: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.practiceSetting',
		description:
			'Additional details about where the content was created (e.g. clinical specialty)',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.status',
		description: 'current | superseded | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.subject',
		description: 'Who/what is the subject of the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.type',
		description: 'Kind of document (LOINC if possible)',
	},
};
