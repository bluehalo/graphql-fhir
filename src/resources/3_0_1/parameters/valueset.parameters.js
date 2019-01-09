const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the valueset query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ValueSet-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ValueSet.date',
		description: 'The value set publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ValueSet.description',
		description: 'The description of the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-expansion
	expansion: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ValueSet.expansion.identifier',
		description: 'Uniquely identifies this expansion',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ValueSet.identifier',
		description: 'External identifier for the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ValueSet.jurisdiction',
		description: 'Intended jurisdiction for the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ValueSet.name',
		description: 'Computationally friendly name of the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ValueSet.publisher',
		description: 'Name of the publisher of the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-reference
	reference: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ValueSet.compose.include.system',
		description:
			'A code system included or excluded in the value set or an imported value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ValueSet.status',
		description: 'The current status of the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ValueSet.title',
		description: 'The human-friendly name of the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ValueSet.url',
		description: 'The uri that identifies the value set',
	},
	// http://hl7.org/fhir/SearchParameter/ValueSet-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ValueSet.version',
		description: 'The business version of the value set',
	},
};
