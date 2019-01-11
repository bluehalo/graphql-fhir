const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Conformancerestoperation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conformancerestoperation',
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
		_name: {
			type: require('./element.schema.js'),
			description:
				'The name of a query, which is used in the _query parameter when the query is called.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The name of a query, which is used in the _query parameter when the query is called.',
		},
		definition: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Conformancerestoperationdefinition_definition_Union',
					description: 'Where the formal definition can be found.',
					types: () => [require('./operationdefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'OperationDefinition') {
							return require('./operationdefinition.schema.js');
						}
					},
				}),
			),
			description: 'Where the formal definition can be found.',
		},
	}),
});
