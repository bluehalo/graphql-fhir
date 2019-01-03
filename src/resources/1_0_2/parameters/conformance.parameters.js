const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the conformance query
 */
module.exports = {
	status: {
		type: TokenScalar,
		description:
			'The current status of the conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-status).',
	},
	resource: {
		type: TokenScalar,
		description:
			'Name of a resource mentioned in a conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-resource).',
	},
	security: {
		type: TokenScalar,
		description:
			'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates (See http://hl7.org/fhir/SearchParameter/conformance-security).',
	},
	format: {
		type: TokenScalar,
		description:
			'formats supported (xml | json | mime type) (See http://hl7.org/fhir/SearchParameter/conformance-format).',
	},
	date: {
		type: DateScalar,
		description:
			'The conformance statement publication date (See http://hl7.org/fhir/SearchParameter/conformance-date).',
	},
	url: {
		type: UriScalar,
		description:
			'The uri that identifies the conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-url).',
	},
	version: {
		type: TokenScalar,
		description:
			'The version identifier of the conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-version).',
	},
	publisher: {
		type: GraphQLString,
		description:
			'Name of the publisher of the conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-publisher).',
	},
	mode: {
		type: TokenScalar,
		description:
			'Mode - restful (server/client) or messaging (sender/receiver) (See http://hl7.org/fhir/SearchParameter/conformance-mode).',
	},
	software: {
		type: GraphQLString,
		description:
			'Part of a the name of a software application (See http://hl7.org/fhir/SearchParameter/conformance-software).',
	},
	description: {
		type: GraphQLString,
		description:
			'Text search in the description of the conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-description).',
	},
	event: {
		type: TokenScalar,
		description:
			'Event code in a conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-event).',
	},
	name: {
		type: GraphQLString,
		description:
			'Name of the conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-name).',
	},
	supported_profile: {
		type: GraphQLString,
		description:
			'Profiles for use cases supported (See http://hl7.org/fhir/SearchParameter/conformance-supported-profile).',
	},
	fhirversion: {
		type: TokenScalar,
		description:
			'The version of FHIR (See http://hl7.org/fhir/SearchParameter/conformance-fhirversion).',
	},
	profile: {
		type: GraphQLString,
		description:
			'A profile id invoked in a conformance statement (See http://hl7.org/fhir/SearchParameter/conformance-profile).',
	},
};
