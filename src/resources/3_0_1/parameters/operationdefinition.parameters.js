const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the operationdefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The operation definition publication date. See http://hl7.org/fhir/SearchParameter/OperationDefinition-date.'
	},
	code: {
		type: TokenScalar,
		description: 'Name used to invoke the operation. See http://hl7.org/fhir/SearchParameter/OperationDefinition-code.'
	},
	instance: {
		type: TokenScalar,
		description: 'Invoke on an instance?. See http://hl7.org/fhir/SearchParameter/OperationDefinition-instance.'
	},
	kind: {
		type: TokenScalar,
		description: 'operation | query. See http://hl7.org/fhir/SearchParameter/OperationDefinition-kind.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the operation definition. See http://hl7.org/fhir/SearchParameter/OperationDefinition-jurisdiction.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the operation definition. See http://hl7.org/fhir/SearchParameter/OperationDefinition-description.'
	},
	type: {
		type: TokenScalar,
		description: 'Invole at the type level?. See http://hl7.org/fhir/SearchParameter/OperationDefinition-type.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the operation definition. See http://hl7.org/fhir/SearchParameter/OperationDefinition-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the operation definition. See http://hl7.org/fhir/SearchParameter/OperationDefinition-url.'
	},
	system: {
		type: TokenScalar,
		description: 'Invoke at the system level?. See http://hl7.org/fhir/SearchParameter/OperationDefinition-system.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the operation definition. See http://hl7.org/fhir/SearchParameter/OperationDefinition-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the operation definition. See http://hl7.org/fhir/SearchParameter/OperationDefinition-publisher.'
	},
	param_profile: {
		type: GraphQLString,
		description: 'Profile on the type. See http://hl7.org/fhir/SearchParameter/OperationDefinition-param-profile.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the operation definition. See http://hl7.org/fhir/SearchParameter/OperationDefinition-status.'
	},
	base: {
		type: GraphQLString,
		description: 'Marks this as a profile of the base. See http://hl7.org/fhir/SearchParameter/OperationDefinition-base.'
	}
};
