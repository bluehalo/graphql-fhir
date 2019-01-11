const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the group query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Group-actual
	actual: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Group.actual',
		description: 'Descriptive or actual',
	},
	// http://hl7.org/fhir/SearchParameter/Group-characteristic
	characteristic: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Group.characteristic.code',
		description: 'Kind of characteristic',
	},
	// http://hl7.org/fhir/SearchParameter/Group-characteristic-value
	characteristic_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A composite of both characteristic and value',
	},
	// http://hl7.org/fhir/SearchParameter/Group-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Group.code',
		description: 'The kind of resources contained',
	},
	// http://hl7.org/fhir/SearchParameter/Group-exclude
	exclude: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Group.characteristic.exclude',
		description: 'Group includes or excludes',
	},
	// http://hl7.org/fhir/SearchParameter/Group-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Group.identifier',
		description: 'Unique id',
	},
	// http://hl7.org/fhir/SearchParameter/Group-member
	member: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Group.member.entity',
		description: 'Reference to the group member',
	},
	// http://hl7.org/fhir/SearchParameter/Group-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Group.type',
		description: 'The type of resources the group contains',
	},
	// http://hl7.org/fhir/SearchParameter/Group-value
	value: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Group.characteristic.valueCodeableConcept',
		description: 'Value held by characteristic',
	},
};
