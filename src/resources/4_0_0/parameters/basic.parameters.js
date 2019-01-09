const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the basic query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Basic-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Basic.author',
		description: 'Who created',
	},
	// http://hl7.org/fhir/SearchParameter/Basic-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Basic.code',
		description: 'Kind of Resource',
	},
	// http://hl7.org/fhir/SearchParameter/Basic-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Basic.created',
		description: 'When created',
	},
	// http://hl7.org/fhir/SearchParameter/Basic-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Basic.identifier',
		description: 'Business identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Basic-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Basic.subject',
		description: 'Identifies the focus of this resource',
	},
	// http://hl7.org/fhir/SearchParameter/Basic-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Basic.subject',
		description: 'Identifies the focus of this resource',
	},
};
