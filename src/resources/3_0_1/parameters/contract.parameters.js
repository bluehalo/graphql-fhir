const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the contract query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Contract-agent
	agent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.agent.actor',
		description: 'Agent to the Contact',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-authority
	authority: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.authority',
		description: 'The authority of the contract',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-domain
	domain: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.domain',
		description: 'The domain of the contract',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Contract.identifier',
		description: 'The identity of the contract',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-issued
	issued: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Contract.issued',
		description: 'The date/time the contract was issued',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		description: 'The identity of the subject of the contract (if a patient)',
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
		description: 'The identity of the subject of the contract',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-term-topic
	term_topic: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.term.topic',
		description: 'The identity of the topic of the contract terms',
	},
};
