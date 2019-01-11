const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the operationdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-base
	base: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OperationDefinition.base',
		description: 'Marks this as a profile of the base',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.code',
		description: 'Name used to invoke the operation',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'OperationDefinition.date',
		description: 'The operation definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'OperationDefinition.description',
		description: 'The description of the operation definition',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-instance
	instance: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.instance',
		description: 'Invoke on an instance?',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.jurisdiction',
		description: 'Intended jurisdiction for the operation definition',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-kind
	kind: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.kind',
		description: 'operation | query',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'OperationDefinition.name',
		description: 'Computationally friendly name of the operation definition',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-param-profile
	param_profile: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OperationDefinition.parameter.profile',
		description: 'Profile on the type',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'OperationDefinition.publisher',
		description: 'Name of the publisher of the operation definition',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.status',
		description: 'The current status of the operation definition',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-system
	system: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.system',
		description: 'Invoke at the system level?',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.type',
		description: 'Invole at the type level?',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'OperationDefinition.url',
		description: 'The uri that identifies the operation definition',
	},
	// http://hl7.org/fhir/SearchParameter/OperationDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OperationDefinition.version',
		description: 'The business version of the operation definition',
	},
};
