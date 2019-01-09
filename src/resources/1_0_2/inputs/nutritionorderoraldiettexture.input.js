const { GraphQLList, GraphQLInputObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary NutritionOrderoralDiettexture Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderoralDiettexture_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/texture-code
		modifier: {
			type: require('./codeableconcept.input.js'),
			description:
				'Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/modified-foodtype
		foodType: {
			type: require('./codeableconcept.input.js'),
			description:
				'The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.',
		},
	}),
});
