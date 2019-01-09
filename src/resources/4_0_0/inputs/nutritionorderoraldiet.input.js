const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary NutritionOrderoralDiet Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderoralDiet_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.',
		},
		schedule: {
			type: new GraphQLList(require('./timing.input.js')),
			description:
				'The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.',
		},
		nutrient: {
			type: new GraphQLList(
				require('./nutritionorderoraldietnutrient.input.js'),
			),
			description:
				'Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.',
		},
		texture: {
			type: new GraphQLList(
				require('./nutritionorderoraldiettexture.input.js'),
			),
			description:
				'Class that describes any texture modifications required for the patient to safely consume various types of solid foods.',
		},
		fluidConsistencyType: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.',
		},
		_instruction: {
			type: require('./element.input.js'),
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
