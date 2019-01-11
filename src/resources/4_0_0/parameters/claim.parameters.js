const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the claim query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Claim-care-team
	care_team: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.careTeam.provider',
		description: 'Member of the CareTeam',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Claim.created',
		description: 'The creation date for the Claim',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-detail-udi
	detail_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.item.detail.udi',
		description: 'UDI associated with a line item, detail product or service',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.item.encounter',
		description: 'Encounters associated with a billed line item',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-enterer
	enterer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.enterer',
		description: 'The party responsible for the entry of the Claim',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-facility
	facility: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.facility',
		description:
			'Facility where the products or services have been or will be provided',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Claim.identifier',
		description: 'The primary identifier of the financial resource',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-insurer
	insurer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.insurer',
		description: 'The target payor/insurer for the Claim',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-item-udi
	item_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.item.udi',
		description: 'UDI associated with a line item product or service',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.patient',
		description: 'Patient receiving the products or services',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-payee
	payee: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.payee.party',
		description: 'The party receiving any payment for the Claim',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Claim.priority',
		description: 'Processing priority requested',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-procedure-udi
	procedure_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.procedure.udi',
		description: 'UDI associated with a procedure',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.provider',
		description: 'Provider responsible for the Claim',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Claim.status',
		description: 'The status of the Claim instance.',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-subdetail-udi
	subdetail_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.item.detail.subDetail.udi',
		description:
			'UDI associated with a line item, detail, subdetail product or service',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-use
	use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Claim.use',
		description: 'The kind of financial resource',
	},
};
