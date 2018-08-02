const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the valueset query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The value set publication date. See http://hl7.org/fhir/SearchParameter/ValueSet-date.'
	},
	reference: {
		type: UriScalar,
		description: 'A code system included or excluded in the value set or an imported value set. See http://hl7.org/fhir/SearchParameter/ValueSet-reference.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-identifier.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-jurisdiction.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-name.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-description.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-publisher.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-title.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-url.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the value set. See http://hl7.org/fhir/SearchParameter/ValueSet-status.'
	},
	expansion: {
		type: UriScalar,
		description: 'Uniquely identifies this expansion. See http://hl7.org/fhir/SearchParameter/ValueSet-expansion.'
	}
};
