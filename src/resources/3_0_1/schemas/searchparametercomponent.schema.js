const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SearchParametercomponent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SearchParametercomponent',
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
		definition: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'SearchParametercomponentdefinition_definition_Union',
					description:
						'The definition of the search parameter that describes this part.',
					types: () => [require('./searchparameter.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'SearchParameter') {
							return require('./searchparameter.schema.js');
						}
					},
				}),
			),
			description:
				'The definition of the search parameter that describes this part.',
		},
		_expression: {
			type: require('./element.schema.js'),
			description:
				'A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.',
		},
		expression: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.',
		},
	}),
});
