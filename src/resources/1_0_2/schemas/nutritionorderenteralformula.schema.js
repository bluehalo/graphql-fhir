const { GraphQLList, GraphQLString, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary NutritionOrderenteralFormula Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrderenteralFormula',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/entformula-type
		baseFormulaType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.',
		},
		_baseFormulaProductName: {
			type: require('./element.schema.js'),
			description:
				"The product or brand name of the enteral or infant formula product such as 'ACME Adult Standard Formula'.",
		},
		baseFormulaProductName: {
			type: GraphQLString,
			description:
				"The product or brand name of the enteral or infant formula product such as 'ACME Adult Standard Formula'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/entformula-additive
		additiveType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.',
		},
		_additiveProductName: {
			type: require('./element.schema.js'),
			description:
				'The product or brand name of the type of modular component to be added to the formula.',
		},
		additiveProductName: {
			type: GraphQLString,
			description:
				'The product or brand name of the type of modular component to be added to the formula.',
		},
		caloricDensity: {
			type: require('./quantity.schema.js'),
			description:
				'The amount of energy (Calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 Calories per fluid ounce or an adult may require an enteral formula that provides 1.5 Calorie/mL.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/enteral-route
		routeofAdministration: {
			type: require('./codeableconcept.schema.js'),
			description:
				"The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.",
		},
		administration: {
			type: new GraphQLList(
				require('./nutritionorderenteralformulaadministration.schema.js'),
			),
			description:
				'Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.',
		},
		maxVolumeToDeliver: {
			type: require('./quantity.schema.js'),
			description:
				'The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.',
		},
		_administrationInstruction: {
			type: require('./element.schema.js'),
			description:
				'Free text formula administration, feeding instructions or additional instructions or information.',
		},
		administrationInstruction: {
			type: GraphQLString,
			description:
				'Free text formula administration, feeding instructions or additional instructions or information.',
		},
	}),
});
