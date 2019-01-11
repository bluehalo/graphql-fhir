const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary TestScriptsetupactionassertruleparam Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptsetupactionassertruleparam_Input',
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
		_name: {
			type: require('./element.input.js'),
			description:
				'Descriptive name for this parameter that matches the external assert rule parameter name.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Descriptive name for this parameter that matches the external assert rule parameter name.',
		},
		_value: {
			type: require('./element.input.js'),
			description:
				'The value for the parameter that will be passed on to the external rule template.',
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The value for the parameter that will be passed on to the external rule template.',
		},
	}),
});
