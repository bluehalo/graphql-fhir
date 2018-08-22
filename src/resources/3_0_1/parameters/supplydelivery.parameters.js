const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the supplydelivery query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'External identifier. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	receiver: {
		type: GraphQLString,
		description: 'Who collected the Supply. See http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver.'
	},
	patient: {
		type: GraphQLString,
		description: 'Patient for whom the item is supplied. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	supplier: {
		type: GraphQLString,
		description: 'Dispenser. See http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier.'
	},
	status: {
		type: TokenScalar,
		description: 'in-progress | completed | abandoned | entered-in-error. See http://hl7.org/fhir/SearchParameter/SupplyDelivery-status.'
	}
};
