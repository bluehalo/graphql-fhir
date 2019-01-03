const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the searchparameter query
 */
module.exports = {
	description: {
		type: GraphQLString,
		description:
			'Documentation for  search parameter (See http://hl7.org/fhir/SearchParameter/searchparameter-description).',
	},
	name: {
		type: GraphQLString,
		description:
			'Informal name for this search parameter (See http://hl7.org/fhir/SearchParameter/searchparameter-name).',
	},
	target: {
		type: TokenScalar,
		description:
			'Types of resource (if a resource reference) (See http://hl7.org/fhir/SearchParameter/searchparameter-target).',
	},
	base: {
		type: TokenScalar,
		description:
			'The resource type this search parameter applies to (See http://hl7.org/fhir/SearchParameter/searchparameter-base).',
	},
	code: {
		type: TokenScalar,
		description:
			'Code used in URL (See http://hl7.org/fhir/SearchParameter/searchparameter-code).',
	},
	type: {
		type: TokenScalar,
		description:
			'number | date | string | token | reference | composite | quantity | uri (See http://hl7.org/fhir/SearchParameter/searchparameter-type).',
	},
	url: {
		type: UriScalar,
		description:
			'Absolute URL used to reference this search parameter (See http://hl7.org/fhir/SearchParameter/searchparameter-url).',
	},
};
