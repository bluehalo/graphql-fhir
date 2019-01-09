const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the conformance query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Conformance-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Conformance.date',
		description: 'The conformance statement publication date',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Conformance.description',
		description: 'Text search in the description of the conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-event
	event: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.messaging.event.code',
		description: 'Event code in a conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-fhirversion
	fhirversion: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.version',
		description: 'The version of FHIR',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-format
	format: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.format',
		description: 'formats supported (xml | json | mime type)',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-mode
	mode: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.rest.mode',
		description:
			'Mode - restful (server/client) or messaging (sender/receiver)',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Conformance.name',
		description: 'Name of the conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-profile
	profile: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Conformance.rest.resource.profile',
		description: 'A profile id invoked in a conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Conformance.publisher',
		description: 'Name of the publisher of the conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-resource
	resource: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.rest.resource.type',
		description: 'Name of a resource mentioned in a conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-security
	security: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.rest.security.service',
		description:
			'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-software
	software: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Conformance.software.name',
		description: 'Part of a the name of a software application',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.status',
		description: 'The current status of the conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-supported-profile
	supported_profile: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Conformance.profile',
		description: 'Profiles for use cases supported',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Conformance.url',
		description: 'The uri that identifies the conformance statement',
	},
	// http://hl7.org/fhir/SearchParameter/Conformance-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Conformance.version',
		description: 'The version identifier of the conformance statement',
	},
};
