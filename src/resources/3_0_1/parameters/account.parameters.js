const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the account query
 */
module.exports = {
	owner: {
		type: GraphQLString,
		description: 'Who is responsible?. See http://hl7.org/fhir/SearchParameter/Account-owner.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Account number. See http://hl7.org/fhir/SearchParameter/Account-identifier.'
	},
	period: {
		type: DateScalar,
		description: 'Transaction window. See http://hl7.org/fhir/SearchParameter/Account-period.'
	},
	balance: {
		type: GraphQLString,
		description: 'How much is in account?. See http://hl7.org/fhir/SearchParameter/Account-balance.'
	},
	subject: {
		type: GraphQLString,
		description: 'What is account tied to?. See http://hl7.org/fhir/SearchParameter/Account-subject.'
	},
	patient: {
		type: GraphQLString,
		description: 'What is account tied to?. See http://hl7.org/fhir/SearchParameter/Account-patient.'
	},
	name: {
		type: GraphQLString,
		description: 'Human-readable label. See http://hl7.org/fhir/SearchParameter/Account-name.'
	},
	type: {
		type: TokenScalar,
		description: 'E.g. patient, expense, depreciation. See http://hl7.org/fhir/SearchParameter/Account-type.'
	},
	status: {
		type: TokenScalar,
		description: 'active | inactive | entered-in-error. See http://hl7.org/fhir/SearchParameter/Account-status.'
	}
};
