const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the expansionprofile query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ExpansionProfile.date',
		description: 'The expansion profile publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ExpansionProfile.description',
		description: 'The description of the expansion profile',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExpansionProfile.identifier',
		description: 'External identifier for the expansion profile',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExpansionProfile.jurisdiction',
		description: 'Intended jurisdiction for the expansion profile',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ExpansionProfile.name',
		description: 'Computationally friendly name of the expansion profile',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ExpansionProfile.publisher',
		description: 'Name of the publisher of the expansion profile',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExpansionProfile.status',
		description: 'The current status of the expansion profile',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ExpansionProfile.url',
		description: 'The uri that identifies the expansion profile',
	},
	// http://hl7.org/fhir/SearchParameter/ExpansionProfile-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExpansionProfile.version',
		description: 'The business version of the expansion profile',
	},
};
