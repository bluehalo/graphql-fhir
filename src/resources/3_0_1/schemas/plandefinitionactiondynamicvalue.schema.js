const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary PlanDefinitionactiondynamicValue Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PlanDefinitionactiondynamicValue',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_description: {
			type: require('./element.schema.js'),
			description:
				'A brief, natural language description of the intended semantics of the dynamic value.',
		},
		description: {
			type: GraphQLString,
			description:
				'A brief, natural language description of the intended semantics of the dynamic value.',
		},
		_path: {
			type: require('./element.schema.js'),
			description:
				'The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.',
		},
		path: {
			type: GraphQLString,
			description:
				'The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The media type of the language for the expression.',
		},
		language: {
			type: GraphQLString,
			description: 'The media type of the language for the expression.',
		},
		_expression: {
			type: require('./element.schema.js'),
			description:
				'An expression specifying the value of the customized element.',
		},
		expression: {
			type: GraphQLString,
			description:
				'An expression specifying the value of the customized element.',
		},
	}),
});
