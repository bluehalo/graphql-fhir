const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the operationdefinition query
 */
module.exports = {
	status: {
		type: TokenScalar,
		description:
			'draft | active | retired (See http://hl7.org/fhir/SearchParameter/operationdefinition-status).',
	},
	code: {
		type: TokenScalar,
		description:
			'Name used to invoke the operation (See http://hl7.org/fhir/SearchParameter/operationdefinition-code).',
	},
	date: {
		type: DateScalar,
		description:
			'Date for this version of the operation definition (See http://hl7.org/fhir/SearchParameter/operationdefinition-date).',
	},
	type: {
		type: TokenScalar,
		description:
			'Invoke at resource level for these type (See http://hl7.org/fhir/SearchParameter/operationdefinition-type).',
	},
	url: {
		type: UriScalar,
		description:
			'Logical URL to reference this operation definition (See http://hl7.org/fhir/SearchParameter/operationdefinition-url).',
	},
	kind: {
		type: TokenScalar,
		description:
			'operation | query (See http://hl7.org/fhir/SearchParameter/operationdefinition-kind).',
	},
	version: {
		type: TokenScalar,
		description:
			'Logical id for this version of the operation definition (See http://hl7.org/fhir/SearchParameter/operationdefinition-version).',
	},
	publisher: {
		type: GraphQLString,
		description:
			'Name of the publisher (Organization or individual) (See http://hl7.org/fhir/SearchParameter/operationdefinition-publisher).',
	},
	system: {
		type: TokenScalar,
		description:
			'Invoke at the system level? (See http://hl7.org/fhir/SearchParameter/operationdefinition-system).',
	},
	name: {
		type: GraphQLString,
		description:
			'Informal name for this operation (See http://hl7.org/fhir/SearchParameter/operationdefinition-name).',
	},
	base: {
		type: GraphQLString,
		description:
			'Marks this as a profile of the base (See http://hl7.org/fhir/SearchParameter/operationdefinition-base).',
	},
	instance: {
		type: TokenScalar,
		description:
			'Invoke on an instance? (See http://hl7.org/fhir/SearchParameter/operationdefinition-instance).',
	},
	profile: {
		type: GraphQLString,
		description:
			'Profile on the type (See http://hl7.org/fhir/SearchParameter/operationdefinition-profile).',
	},
};
