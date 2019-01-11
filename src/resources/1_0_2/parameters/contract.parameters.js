const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the contract query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Contract-actor
	actor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.actor.entity',
		description: 'Contract Actor Type',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Contract.identifier',
		description: 'The identity of the contract',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		description: 'The identity of the target of the contract (if a patient)',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-signer
	signer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.signer.party',
		description: 'Contract Signatory Party',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		description: 'The identity of the target of the contract',
	},
};
