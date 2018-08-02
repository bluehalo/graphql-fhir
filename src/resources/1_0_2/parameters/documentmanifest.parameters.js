const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the documentmanifest query
 */
module.exports = {
	related_ref: {
		type: GraphQLString,
		description: 'Related Resource. See http://hl7.org/fhir/SearchParameter/documentmanifest-related-ref.'
	},
	related_id: {
		type: TokenScalar,
		description: 'Identifiers of things that are related. See http://hl7.org/fhir/SearchParameter/documentmanifest-related-id.'
	},
	content_ref: {
		type: GraphQLString,
		description: 'Contents of this set of documents. See http://hl7.org/fhir/SearchParameter/documentmanifest-content-ref.'
	},
	status: {
		type: TokenScalar,
		description: 'current | superseded | entered-in-error. See http://hl7.org/fhir/SearchParameter/documentmanifest-status.'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject of the set of documents. See http://hl7.org/fhir/SearchParameter/documentmanifest-subject.'
	},
	type: {
		type: TokenScalar,
		description: 'Kind of document set. See http://hl7.org/fhir/SearchParameter/documentmanifest-type.'
	},
	recipient: {
		type: GraphQLString,
		description: 'Intended to get notified about this set of documents. See http://hl7.org/fhir/SearchParameter/documentmanifest-recipient.'
	},
	author: {
		type: GraphQLString,
		description: 'Who and/or what authored the manifest. See http://hl7.org/fhir/SearchParameter/documentmanifest-author.'
	},
	patient: {
		type: GraphQLString,
		description: 'The subject of the set of documents. See http://hl7.org/fhir/SearchParameter/documentmanifest-patient.'
	},
	source: {
		type: UriScalar,
		description: 'The source system/application/software. See http://hl7.org/fhir/SearchParameter/documentmanifest-source.'
	},
	created: {
		type: DateScalar,
		description: 'When this document manifest created. See http://hl7.org/fhir/SearchParameter/documentmanifest-created.'
	},
	description: {
		type: GraphQLString,
		description: 'Human-readable description (title). See http://hl7.org/fhir/SearchParameter/documentmanifest-description.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique Identifier for the set of documents. See http://hl7.org/fhir/SearchParameter/documentmanifest-identifier.'
	}
};
