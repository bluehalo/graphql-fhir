const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the supplyrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/SupplyRequest-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'SupplyRequest.date',
		description: 'When the request was made',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SupplyRequest.identifier',
		description: 'Unique identifier',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyRequest-kind
	kind: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SupplyRequest.kind',
		description: 'The kind of supply (central, non-stock, etc.)',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'SupplyRequest.patient',
		description: 'Patient for whom the item is supplied',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyRequest-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'SupplyRequest.source',
		description: 'Who initiated this order',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyRequest-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SupplyRequest.status',
		description: 'requested | completed | failed | cancelled',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyRequest-supplier
	supplier: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'SupplyRequest.supplier',
		description: 'Who is intended to fulfill the request',
	},
};
