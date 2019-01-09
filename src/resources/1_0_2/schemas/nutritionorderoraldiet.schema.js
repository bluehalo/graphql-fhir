const { GraphQLList, GraphQLString, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary NutritionOrderoralDiet Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrderoralDiet',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/diet-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.',
		},
		schedule: {
			type: new GraphQLList(require('./timing.schema.js')),
			description:
				'The time period and frequency at which the diet should be given.',
		},
		nutrient: {
			type: new GraphQLList(
				require('./nutritionorderoraldietnutrient.schema.js'),
			),
			description:
				'Class that defines the quantity and type of nutrient modifications required for the oral diet.',
		},
		texture: {
			type: new GraphQLList(
				require('./nutritionorderoraldiettexture.schema.js'),
			),
			description:
				'Class that describes any texture modifications required for the patient to safely consume various types of solid foods.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consistency-type
		fluidConsistencyType: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.',
		},
		_instruction: {
			type: require('./element.schema.js'),
			description:
				'Free text or additional instructions or information pertaining to the oral diet.',
		},
		instruction: {
			type: GraphQLString,
			description:
				'Free text or additional instructions or information pertaining to the oral diet.',
		},
	}),
});
