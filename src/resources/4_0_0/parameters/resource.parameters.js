const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the resource query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Resource-content
	_content: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: '',
		description: 'Search on the entire content of the resource',
	},
	// http://hl7.org/fhir/SearchParameter/Resource-id
	_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Resource.id',
		description: 'Logical id of this artifact',
	},
	// http://hl7.org/fhir/SearchParameter/Resource-lastUpdated
	_lastUpdated: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Resource.meta.lastUpdated',
		description: 'When the resource version last changed',
	},
	// http://hl7.org/fhir/SearchParameter/Resource-profile
	_profile: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Resource.meta.profile',
		description: 'Profiles this resource claims to conform to',
	},
	// http://hl7.org/fhir/SearchParameter/Resource-query
	_query: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: '',
		description:
			'A custom search profile that describes a specific defined query operation',
	},
	// http://hl7.org/fhir/SearchParameter/Resource-security
	_security: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Resource.meta.security',
		description: 'Security Labels applied to this resource',
	},
	// http://hl7.org/fhir/SearchParameter/Resource-source
	_source: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Resource.meta.source',
		description: 'Identifies where the resource comes from',
	},
	// http://hl7.org/fhir/SearchParameter/Resource-tag
	_tag: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Resource.meta.tag',
		description: 'Tags applied to this resource',
	},
};
