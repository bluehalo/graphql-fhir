const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the nutritionorder query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-additive
	additive: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NutritionOrder.enteralFormula.additiveType',
		description: 'Type of module component to add to the feeding',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-datetime
	datetime: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'NutritionOrder.dateTime',
		description: 'Return nutrition orders requested on this date',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'NutritionOrder.encounter',
		description: 'Return nutrition orders with this encounter identifier',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-formula
	formula: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NutritionOrder.enteralFormula.baseFormulaType',
		description: 'Type of enteral or infant formula',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NutritionOrder.identifier',
		description: 'Return nutrition orders with this external identifier',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-oraldiet
	oraldiet: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NutritionOrder.oralDiet.type',
		description:
			'Type of diet that can be consumed orally (i.e., take via the mouth).',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'NutritionOrder.patient',
		description:
			'The identity of the person who requires the diet, formula or nutritional supplement',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'NutritionOrder.orderer',
		description: 'The identify of the provider who placed the nutrition order',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NutritionOrder.status',
		description: 'Status of the nutrition order.',
	},
	// http://hl7.org/fhir/SearchParameter/NutritionOrder-supplement
	supplement: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NutritionOrder.supplement.type',
		description: 'Type of supplement product requested',
	},
};
