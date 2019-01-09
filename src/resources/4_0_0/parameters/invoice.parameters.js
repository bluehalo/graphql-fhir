const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the invoice query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Invoice-account
	account: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Invoice.account',
		description: 'Account that is being balanced',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Invoice.date',
		description: 'Invoice date / posting date',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Invoice.identifier',
		description: 'Business Identifier for item',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-issuer
	issuer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Invoice.issuer',
		description: 'Issuing Organization of Invoice',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-participant
	participant: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Invoice.participant.actor',
		description: 'Individual who was involved',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-participant-role
	participant_role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Invoice.participant.role',
		description: 'Type of involvement in creation of this Invoice',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Invoice.subject',
		description: 'Recipient(s) of goods and services',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-recipient
	recipient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Invoice.recipient',
		description: 'Recipient of this invoice',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Invoice.status',
		description: 'draft | issued | balanced | cancelled | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Invoice.subject',
		description: 'Recipient(s) of goods and services',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-totalgross
	totalgross: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Invoice.totalGross',
		description: 'Gross total of this Invoice',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-totalnet
	totalnet: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Invoice.totalNet',
		description: 'Net total of this Invoice',
	},
	// http://hl7.org/fhir/SearchParameter/Invoice-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Invoice.type',
		description: 'Type of Invoice',
	},
};
