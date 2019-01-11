const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the searchparameter query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/SearchParameter-base
	base: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.base',
		description: 'The resource type(s) this search parameter applies to',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.code',
		description: 'Code used in URL',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-component
	component: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'SearchParameter.component.definition',
		description: 'Defines how the part works',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'SearchParameter.date',
		description: 'The search parameter publication date',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-derived-from
	derived_from: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'SearchParameter.derivedFrom',
		description: 'Original Definition for the search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchParameter.description',
		description: 'The description of the search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.jurisdiction',
		description: 'Intended jurisdiction for the search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchParameter.name',
		description: 'Computationally friendly name of the search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchParameter.publisher',
		description: 'Name of the publisher of the search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.status',
		description: 'The current status of the search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-target
	target: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.target',
		description: 'Types of resource (if a resource reference)',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.type',
		description:
			'number | date | string | token | reference | composite | quantity | uri',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'SearchParameter.url',
		description: 'The uri that identifies the search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.version',
		description: 'The business version of the search parameter',
	},
};
