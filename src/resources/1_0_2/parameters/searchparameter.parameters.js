const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
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
		description: 'The resource type this search parameter applies to',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SearchParameter.code',
		description: 'Code used in URL',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchParameter.description',
		description: 'Documentation for  search parameter',
	},
	// http://hl7.org/fhir/SearchParameter/SearchParameter-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'SearchParameter.name',
		description: 'Informal name for this search parameter',
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
		description: 'Absolute URL used to reference this search parameter',
	},
};
