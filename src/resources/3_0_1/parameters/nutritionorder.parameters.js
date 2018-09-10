const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the nutritionorder query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Return nutrition orders with this external identifier (See http://hl7.org/fhir/SearchParameter/clinical-identifier).'
	},
	datetime: {
		type: DateScalar,
		description: 'Return nutrition orders requested on this date (See http://hl7.org/fhir/SearchParameter/NutritionOrder-datetime).'
	},
	provider: {
		type: GraphQLString,
		description: 'The identify of the provider who placed the nutrition order (See http://hl7.org/fhir/SearchParameter/NutritionOrder-provider).'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of the person who requires the diet, formula or nutritional supplement (See http://hl7.org/fhir/SearchParameter/clinical-patient).'
	},
	supplement: {
		type: TokenScalar,
		description: 'Type of supplement product requested (See http://hl7.org/fhir/SearchParameter/NutritionOrder-supplement).'
	},
	formula: {
		type: TokenScalar,
		description: 'Type of enteral or infant formula (See http://hl7.org/fhir/SearchParameter/NutritionOrder-formula).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Return nutrition orders with this encounter identifier (See http://hl7.org/fhir/SearchParameter/clinical-encounter).'
	},
	oraldiet: {
		type: TokenScalar,
		description: 'Type of diet that can be consumed orally (i.e., take via the mouth). (See http://hl7.org/fhir/SearchParameter/NutritionOrder-oraldiet).'
	},
	status: {
		type: TokenScalar,
		description: 'Status of the nutrition order. (See http://hl7.org/fhir/SearchParameter/NutritionOrder-status).'
	},
	additive: {
		type: TokenScalar,
		description: 'Type of module component to add to the feeding (See http://hl7.org/fhir/SearchParameter/NutritionOrder-additive).'
	}
};
