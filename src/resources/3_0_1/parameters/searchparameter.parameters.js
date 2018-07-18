const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the searchparameter query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The search parameter publication date. See http://hl7.org/fhir/SearchParameter/SearchParameter-date.'
	},
	code: {
		type: TokenScalar,
		description: 'Code used in URL. See http://hl7.org/fhir/SearchParameter/SearchParameter-code.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-jurisdiction.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-description.'
	},
	derived_from: {
		type: UriScalar,
		description: 'Original Definition for the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-derived-from.'
	},
	type: {
		type: TokenScalar,
		description: 'number | date | string | token | reference | composite | quantity | uri. See http://hl7.org/fhir/SearchParameter/SearchParameter-type.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-url.'
	},
	target: {
		type: TokenScalar,
		description: 'Types of resource (if a resource reference). See http://hl7.org/fhir/SearchParameter/SearchParameter-target.'
	},
	component: {
		type: GraphQLString,
		description: 'Defines how the part works. See http://hl7.org/fhir/SearchParameter/SearchParameter-component.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-publisher.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the search parameter. See http://hl7.org/fhir/SearchParameter/SearchParameter-status.'
	},
	base: {
		type: TokenScalar,
		description: 'The resource type(s) this search parameter applies to. See http://hl7.org/fhir/SearchParameter/SearchParameter-base.'
	}
};
