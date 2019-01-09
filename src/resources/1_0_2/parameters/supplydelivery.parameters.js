const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the supplydelivery query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/SupplyDelivery-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SupplyDelivery.identifier',
		description: 'External identifier',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyDelivery-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'SupplyDelivery.patient',
		description: 'Patient for whom the item is supplied',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver
	receiver: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'SupplyDelivery.receiver',
		description: 'Who collected the Supply',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyDelivery-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SupplyDelivery.status',
		description: 'in-progress | completed | abandoned',
	},
	// http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier
	supplier: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'SupplyDelivery.supplier',
		description: 'Dispenser',
	},
};
