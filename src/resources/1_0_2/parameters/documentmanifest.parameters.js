const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the documentmanifest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentManifest.author',
		description: 'Who and/or what authored the manifest',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-content-ref
	content_ref: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentManifest.content.pReference',
		description: 'Contents of this set of documents',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DocumentManifest.created',
		description: 'When this document manifest created',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DocumentManifest.description',
		description: 'Human-readable description (title)',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentManifest.masterIdentifier',
		description: 'Unique Identifier for the set of documents',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentManifest.subject',
		description: 'The subject of the set of documents',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient
	recipient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentManifest.recipient',
		description: 'Intended to get notified about this set of documents',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id
	related_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentManifest.related.identifier',
		description: 'Identifiers of things that are related',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref
	related_ref: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentManifest.related.ref',
		description: 'Related Resource',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-source
	source: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'DocumentManifest.source',
		description: 'The source system/application/software',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentManifest.status',
		description: 'current | superseded | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentManifest.subject',
		description: 'The subject of the set of documents',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentManifest-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentManifest.type',
		description: 'Kind of document set',
	},
};
