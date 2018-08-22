const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the valueset query
 */
module.exports = {
	system: {
		type: UriScalar,
		description: 'The system for any codes defined by this value set. See http://hl7.org/fhir/SearchParameter/valueset-system.'
	},
	expansion: {
		type: UriScalar,
		description: 'Uniquely identifies this expansion. See http://hl7.org/fhir/SearchParameter/valueset-expansion.'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the value set. See http://hl7.org/fhir/SearchParameter/valueset-status.'
	},
	description: {
		type: GraphQLString,
		description: 'Text search in the description of the value set. See http://hl7.org/fhir/SearchParameter/valueset-description.'
	},
	name: {
		type: GraphQLString,
		description: 'The name of the value set. See http://hl7.org/fhir/SearchParameter/valueset-name.'
	},
	context: {
		type: TokenScalar,
		description: 'A use context assigned to the value set. See http://hl7.org/fhir/SearchParameter/valueset-context.'
	},
	code: {
		type: TokenScalar,
		description: 'A code defined in the value set. See http://hl7.org/fhir/SearchParameter/valueset-code.'
	},
	date: {
		type: DateScalar,
		description: 'The value set publication date. See http://hl7.org/fhir/SearchParameter/valueset-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identifier for the value set. See http://hl7.org/fhir/SearchParameter/valueset-identifier.'
	},
	reference: {
		type: UriScalar,
		description: 'A code system included or excluded in the value set or an imported value set. See http://hl7.org/fhir/SearchParameter/valueset-reference.'
	},
	url: {
		type: UriScalar,
		description: 'The logical URL for the value set. See http://hl7.org/fhir/SearchParameter/valueset-url.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the value set. See http://hl7.org/fhir/SearchParameter/valueset-publisher.'
	},
	version: {
		type: TokenScalar,
		description: 'The version identifier of the value set. See http://hl7.org/fhir/SearchParameter/valueset-version.'
	}
};
