const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the capabilitystatement query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CapabilityStatement.date',
		description: 'The capability statement publication date',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CapabilityStatement.description',
		description: 'The description of the capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-event
	event: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.messaging.event.code',
		description: 'Event code in a capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-fhirversion
	fhirversion: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.version',
		description: 'The version of FHIR',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-format
	format: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.format',
		description: 'formats supported (xml | json | ttl | mime type)',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-guide
	guide: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'CapabilityStatement.implementationGuide',
		description: 'Implementation guides supported',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.jurisdiction',
		description: 'Intended jurisdiction for the capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-mode
	mode: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.rest.mode',
		description:
			'Mode - restful (server/client) or messaging (sender/receiver)',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CapabilityStatement.name',
		description: 'Computationally friendly name of the capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CapabilityStatement.publisher',
		description: 'Name of the publisher of the capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource
	resource: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.rest.resource.type',
		description: 'Name of a resource mentioned in a capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource-profile
	resource_profile: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CapabilityStatement.rest.resource.profile',
		description: 'A profile id invoked in a capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-security-service
	security_service: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.rest.security.service',
		description:
			'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-software
	software: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CapabilityStatement.software.name',
		description: 'Part of a the name of a software application',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.status',
		description: 'The current status of the capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-supported-profile
	supported_profile: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CapabilityStatement.profile',
		description: 'Profiles for use cases supported',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CapabilityStatement.title',
		description: 'The human-friendly name of the capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'CapabilityStatement.url',
		description: 'The uri that identifies the capability statement',
	},
	// http://hl7.org/fhir/SearchParameter/CapabilityStatement-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CapabilityStatement.version',
		description: 'The business version of the capability statement',
	},
};
