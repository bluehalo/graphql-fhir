const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the contract query
 */
module.exports = {
	signer: {
		type: GraphQLString,
		description: 'Contract Signatory Party. See http://hl7.org/fhir/SearchParameter/contract-signer.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of the target of the contract (if a patient). See http://hl7.org/fhir/SearchParameter/contract-patient.'
	},
	subject: {
		type: GraphQLString,
		description: 'The identity of the target of the contract. See http://hl7.org/fhir/SearchParameter/contract-subject.'
	},
	actor: {
		type: GraphQLString,
		description: 'Contract Actor Type. See http://hl7.org/fhir/SearchParameter/contract-actor.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identity of the contract. See http://hl7.org/fhir/SearchParameter/contract-identifier.'
	}
};
