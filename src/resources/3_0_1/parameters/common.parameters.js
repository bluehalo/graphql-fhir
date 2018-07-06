const { GraphQLString } = require('graphql');

// Scalars
const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');

/**
 * @name exports
 * @static
 * @summary Arguments for all queries
 */
module.exports = {
	_text: {
		type: GraphQLString,
		description: 'Search on the narrative of the resource. See http://hl7.org/fhir/SearchParameter/DomainResource-text'
	},
	_query: {
		type: TokenScalar,
		description: 'A custom search profile that describes a specific defined query operation. See http://hl7.org/fhir/SearchParameter/Resource-query'
	},
	_profile: {
		type: GraphQLString,
		description: 'Profiles this resource claims to conform to. See http://hl7.org/fhir/SearchParameter/Resource-profile'
	},
	_lastUpdated: {
		type: DateScalar,
		description: 'WHen the resource version last changed. See http://hl7.org/fhir/SearchParameter/Resource-lastUpdated'
	},
	_tag: {
		type: TokenScalar,
		description: 'Tags applied to this resource. See http://hl7.org/fhir/SearchParameter/Resource-tag'
	},
	_security: {
		type: TokenScalar,
		description: 'Security labels applied to this resource. See http://hl7.org/fhir/SearchParameter/Resource-security'
	},
	_id: {
		type: TokenScalar,
		description: 'Logical id of this artifact. See http://hl7.org/fhir/SearchParameter/Resource-id'
	},
	_content: {
		type: GraphQLString,
		description: 'Search on the entire content of the resource. See http://hl7.org/fhir/SearchParameter/Resource-content'
	}
};
