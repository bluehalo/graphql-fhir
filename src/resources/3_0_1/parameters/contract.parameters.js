const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the contract query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The identity of the contract (See http://hl7.org/fhir/SearchParameter/Contract-identifier).'
	},
	agent: {
		type: GraphQLString,
		description: 'Agent to the Contact (See http://hl7.org/fhir/SearchParameter/Contract-agent).'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of the subject of the contract (if a patient) (See http://hl7.org/fhir/SearchParameter/Contract-patient).'
	},
	subject: {
		type: GraphQLString,
		description: 'The identity of the subject of the contract (See http://hl7.org/fhir/SearchParameter/Contract-subject).'
	},
	authority: {
		type: GraphQLString,
		description: 'The authority of the contract (See http://hl7.org/fhir/SearchParameter/Contract-authority).'
	},
	domain: {
		type: GraphQLString,
		description: 'The domain of the contract (See http://hl7.org/fhir/SearchParameter/Contract-domain).'
	},
	term_topic: {
		type: GraphQLString,
		description: 'The identity of the topic of the contract terms (See http://hl7.org/fhir/SearchParameter/Contract-term-topic).'
	},
	issued: {
		type: DateScalar,
		description: 'The date/time the contract was issued (See http://hl7.org/fhir/SearchParameter/Contract-issued).'
	},
	signer: {
		type: GraphQLString,
		description: 'Contract Signatory Party (See http://hl7.org/fhir/SearchParameter/Contract-signer).'
	}
};
