const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary NutritionOrder.enteralFormula Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderEnteralFormula_Input',
	description: 'Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/entformula-type
		baseFormulaType: {
			type: require('./codeableconcept.input'),
			description: 'The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.'
		},
		baseFormulaProductName: {
			type: GraphQLString,
			description: 'The product or brand name of the enteral or infant formula product such as \'ACME Adult Standard Formula\'.'
		},
		_baseFormulaProductName: {
			type: require('./element.input'),
			description: 'The product or brand name of the enteral or infant formula product such as \'ACME Adult Standard Formula\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/entformula-additive
		additiveType: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.'
		},
		additiveProductName: {
			type: GraphQLString,
			description: 'The product or brand name of the type of modular component to be added to the formula.'
		},
		_additiveProductName: {
			type: require('./element.input'),
			description: 'The product or brand name of the type of modular component to be added to the formula.'
		},
		caloricDensity: {
			type: require('./quantity.input'),
			description: 'The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/enteral-route
		routeofAdministration: {
			type: require('./codeableconcept.input'),
			description: 'The route or physiological path of administration into the patient\'s gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.'
		},
		administration: {
			type: new GraphQLList(require('./nutritionorderenteralformulaadministration.input')),
			description: 'Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.'
		},
		maxVolumeToDeliver: {
			type: require('./quantity.input'),
			description: 'The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.'
		},
		administrationInstruction: {
			type: GraphQLString,
			description: 'Free text formula administration, feeding instructions or additional instructions or information.'
		},
		_administrationInstruction: {
			type: require('./element.input'),
			description: 'Free text formula administration, feeding instructions or additional instructions or information.'
		}
	})
});
