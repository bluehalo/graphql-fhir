const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the documentmanifest query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Unique Identifier for the set of documents. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	related_id: {
		type: TokenScalar,
		description: 'Identifiers of things that are related. See http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id.'
	},
	content_ref: {
		type: GraphQLString,
		description: 'Contents of this set of documents. See http://hl7.org/fhir/SearchParameter/DocumentManifest-content-ref.'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject of the set of documents. See http://hl7.org/fhir/SearchParameter/DocumentManifest-subject.'
	},
	author: {
		type: GraphQLString,
		description: 'Who and/or what authored the manifest. See http://hl7.org/fhir/SearchParameter/DocumentManifest-author.'
	},
	created: {
		type: DateScalar,
		description: 'When this document manifest created. See http://hl7.org/fhir/SearchParameter/DocumentManifest-created.'
	},
	description: {
		type: GraphQLString,
		description: 'Human-readable description (title). See http://hl7.org/fhir/SearchParameter/DocumentManifest-description.'
	},
	source: {
		type: UriScalar,
		description: 'The source system/application/software. See http://hl7.org/fhir/SearchParameter/DocumentManifest-source.'
	},
	type: {
		type: TokenScalar,
		description: 'Kind of document set. See http://hl7.org/fhir/SearchParameter/clinical-type.'
	},
	related_ref: {
		type: GraphQLString,
		description: 'Related Resource. See http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref.'
	},
	patient: {
		type: GraphQLString,
		description: 'The subject of the set of documents. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	recipient: {
		type: GraphQLString,
		description: 'Intended to get notified about this set of documents. See http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient.'
	},
	status: {
		type: TokenScalar,
		description: 'current | superseded | entered-in-error. See http://hl7.org/fhir/SearchParameter/DocumentManifest-status.'
	}
};
