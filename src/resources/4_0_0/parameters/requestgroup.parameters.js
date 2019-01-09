const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the requestgroup query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/RequestGroup-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RequestGroup.author',
		description: 'The author of the request group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-authored
	authored: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'RequestGroup.authoredOn',
		description: 'The date the request group was authored',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RequestGroup.code',
		description: 'The code of the request group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RequestGroup.encounter',
		description: 'The encounter the request group applies to',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-group-identifier
	group_identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RequestGroup.groupIdentifier',
		description: 'The group identifier for the request group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RequestGroup.identifier',
		description: 'External identifiers for the request group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-instantiates-canonical
	instantiates_canonical: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RequestGroup.instantiatesCanonical',
		description:
			'The FHIR-based definition from which the request group is realized',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-instantiates-uri
	instantiates_uri: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'RequestGroup.instantiatesUri',
		description:
			'The external definition from which the request group is realized',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-intent
	intent: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RequestGroup.intent',
		description: 'The intent of the request group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-participant
	participant: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RequestGroup.action.participant',
		description: 'The participant in the requests in the group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RequestGroup.subject',
		description: 'The identity of a patient to search for request groups',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RequestGroup.priority',
		description: 'The priority of the request group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RequestGroup.status',
		description: 'The status of the request group',
	},
	// http://hl7.org/fhir/SearchParameter/RequestGroup-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RequestGroup.subject',
		description: 'The subject that the request group is about',
	},
};
