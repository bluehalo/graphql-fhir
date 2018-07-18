const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the account query
 */
module.exports = {
	balance: {
		type: GraphQLString,
		description: 'How much is in account?. See http://hl7.org/fhir/SearchParameter/account-balance.'
	},
	patient: {
		type: GraphQLString,
		description: 'What is account tied to?. See http://hl7.org/fhir/SearchParameter/account-patient.'
	},
	status: {
		type: TokenScalar,
		description: 'active | inactive. See http://hl7.org/fhir/SearchParameter/account-status.'
	},
	subject: {
		type: GraphQLString,
		description: 'What is account tied to?. See http://hl7.org/fhir/SearchParameter/account-subject.'
	},
	name: {
		type: GraphQLString,
		description: 'Human-readable label. See http://hl7.org/fhir/SearchParameter/account-name.'
	},
	owner: {
		type: GraphQLString,
		description: 'Who is responsible?. See http://hl7.org/fhir/SearchParameter/account-owner.'
	},
	period: {
		type: DateScalar,
		description: 'Transaction window. See http://hl7.org/fhir/SearchParameter/account-period.'
	},
	type: {
		type: TokenScalar,
		description: 'E.g. patient, expense, depreciation. See http://hl7.org/fhir/SearchParameter/account-type.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Account number. See http://hl7.org/fhir/SearchParameter/account-identifier.'
	}
};
