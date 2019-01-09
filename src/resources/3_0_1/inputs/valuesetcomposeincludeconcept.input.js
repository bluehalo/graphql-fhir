const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ValueSetcomposeincludeconcept Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetcomposeincludeconcept_Input',
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
		_code: {
			type: require('./element.input.js'),
			description:
				'Specifies a code for the concept to be included or excluded.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Specifies a code for the concept to be included or excluded.',
		},
		_display: {
			type: require('./element.input.js'),
			description:
				'The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.',
		},
		display: {
			type: GraphQLString,
			description:
				'The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.',
		},
		designation: {
			type: new GraphQLList(
				require('./valuesetcomposeincludeconceptdesignation.input.js'),
			),
			description:
				'Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.',
		},
	}),
});
