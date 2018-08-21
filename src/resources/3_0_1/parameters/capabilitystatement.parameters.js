const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the capabilitystatement query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The capability statement publication date. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-date.'
	},
	resource_profile: {
		type: GraphQLString,
		description: 'A profile id invoked in a capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource-profile.'
	},
	software: {
		type: GraphQLString,
		description: 'Part of a the name of a software application. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-software.'
	},
	resource: {
		type: TokenScalar,
		description: 'Name of a resource mentioned in a capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-jurisdiction.'
	},
	format: {
		type: TokenScalar,
		description: 'formats supported (xml | json | ttl | mime type). See http://hl7.org/fhir/SearchParameter/CapabilityStatement-format.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-description.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-title.'
	},
	fhirversion: {
		type: TokenScalar,
		description: 'The version of FHIR. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-fhirversion.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-url.'
	},
	supported_profile: {
		type: GraphQLString,
		description: 'Profiles for use cases supported. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-supported-profile.'
	},
	mode: {
		type: TokenScalar,
		description: 'Mode - restful (server/client) or messaging (sender/receiver). See http://hl7.org/fhir/SearchParameter/CapabilityStatement-mode.'
	},
	security_service: {
		type: TokenScalar,
		description: 'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-security-service.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-publisher.'
	},
	event: {
		type: TokenScalar,
		description: 'Event code in a capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-event.'
	},
	guide: {
		type: UriScalar,
		description: 'Implementation guides supported. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-guide.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the capability statement. See http://hl7.org/fhir/SearchParameter/CapabilityStatement-status.'
	}
};
