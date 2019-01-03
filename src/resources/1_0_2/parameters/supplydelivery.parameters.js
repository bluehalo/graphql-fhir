const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the supplydelivery query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description:
			'Patient for whom the item is supplied (See http://hl7.org/fhir/SearchParameter/supplydelivery-patient).',
	},
	receiver: {
		type: GraphQLString,
		description:
			'Who collected the Supply (See http://hl7.org/fhir/SearchParameter/supplydelivery-receiver).',
	},
	status: {
		type: TokenScalar,
		description:
			'in-progress | completed | abandoned (See http://hl7.org/fhir/SearchParameter/supplydelivery-status).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'External identifier (See http://hl7.org/fhir/SearchParameter/supplydelivery-identifier).',
	},
	supplier: {
		type: GraphQLString,
		description:
			'Dispenser (See http://hl7.org/fhir/SearchParameter/supplydelivery-supplier).',
	},
};
