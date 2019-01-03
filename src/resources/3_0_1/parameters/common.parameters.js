const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the common query
 */
module.exports = {
	_text: {
		type: GraphQLString,
		description:
			'Search on the narrative of the resource (See http://hl7.org/fhir/SearchParameter/DomainResource-text).',
	},
	_query: {
		type: TokenScalar,
		description:
			'A custom search profile that describes a specific defined query operation (See http://hl7.org/fhir/SearchParameter/Resource-query).',
	},
	_profile: {
		type: UriScalar,
		description:
			'Profiles this resource claims to conform to (See http://hl7.org/fhir/SearchParameter/Resource-profile).',
	},
	_lastUpdated: {
		type: DateScalar,
		description:
			'When the resource version last changed (See http://hl7.org/fhir/SearchParameter/Resource-lastUpdated).',
	},
	_tag: {
		type: TokenScalar,
		description:
			'Tags applied to this resource (See http://hl7.org/fhir/SearchParameter/Resource-tag).',
	},
	_security: {
		type: TokenScalar,
		description:
			'Security Labels applied to this resource (See http://hl7.org/fhir/SearchParameter/Resource-security).',
	},
	_id: {
		type: TokenScalar,
		description:
			'Logical id of this artifact (See http://hl7.org/fhir/SearchParameter/Resource-id).',
	},
	_content: {
		type: GraphQLString,
		description:
			'Search on the entire content of the resource (See http://hl7.org/fhir/SearchParameter/Resource-content).',
	},
};
