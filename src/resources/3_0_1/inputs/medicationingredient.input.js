const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Medicationingredient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Medicationingredient_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		itemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'The actual ingredient - either a substance (simple ingredient) or another medication.',
		},
		itemReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The actual ingredient - either a substance (simple ingredient) or another medication.',
		},
		_isActive: {
			type: require('./element.input.js'),
			description:
				'Indication of whether this ingredient affects the therapeutic action of the drug.',
		},
		isActive: {
			type: GraphQLBoolean,
			description:
				'Indication of whether this ingredient affects the therapeutic action of the drug.',
		},
		amount: {
			type: require('./ratio.input.js'),
			description:
				'Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.',
		},
	}),
});
