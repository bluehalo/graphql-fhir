const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the account query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Account-balance
	balance: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Account.balance',
		description: 'How much is in account?',
	},
	// http://hl7.org/fhir/SearchParameter/Account-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Account.identifier',
		description: 'Account number',
	},
	// http://hl7.org/fhir/SearchParameter/Account-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Account.name',
		description: 'Human-readable label',
	},
	// http://hl7.org/fhir/SearchParameter/Account-owner
	owner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Account.owner',
		description: 'Who is responsible?',
	},
	// http://hl7.org/fhir/SearchParameter/Account-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Account.subject',
		description: 'What is account tied to?',
	},
	// http://hl7.org/fhir/SearchParameter/Account-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Account.coveragePeriod',
		description: 'Transaction window',
	},
	// http://hl7.org/fhir/SearchParameter/Account-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Account.status',
		description: 'active | inactive',
	},
	// http://hl7.org/fhir/SearchParameter/Account-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Account.subject',
		description: 'What is account tied to?',
	},
	// http://hl7.org/fhir/SearchParameter/Account-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Account.type',
		description: 'E.g. patient, expense, depreciation',
	},
};
