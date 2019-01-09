const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the account query
 */
module.exports = {
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
		description: 'Entity managing the Account',
	},
	// http://hl7.org/fhir/SearchParameter/Account-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Account.subject',
		description: 'The entity that caused the expenses',
	},
	// http://hl7.org/fhir/SearchParameter/Account-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Account.servicePeriod',
		description: 'Transaction window',
	},
	// http://hl7.org/fhir/SearchParameter/Account-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Account.status',
		description: 'active | inactive | entered-in-error | on-hold | unknown',
	},
	// http://hl7.org/fhir/SearchParameter/Account-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Account.subject',
		description: 'The entity that caused the expenses',
	},
	// http://hl7.org/fhir/SearchParameter/Account-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Account.type',
		description: 'E.g. patient, expense, depreciation',
	},
};
