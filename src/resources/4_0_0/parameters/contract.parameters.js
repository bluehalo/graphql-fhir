const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the contract query
 */
module.exports = {
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
	// http://hl7.org/fhir/SearchParameter/Contract-instantiates
	instantiates: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Contract.instantiatesUri',
		description: 'A source definition of the contract',
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
	// http://hl7.org/fhir/SearchParameter/Contract-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Contract.status',
		description: 'The status of the contract',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Contract.subject',
		description: 'The identity of the subject of the contract',
	},
	// http://hl7.org/fhir/SearchParameter/Contract-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Contract.url',
		description: 'The basal contract definition',
	},
};
