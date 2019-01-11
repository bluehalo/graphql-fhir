const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ImplementationGuidepackageresource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuidepackageresource',
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
		_example: {
			type: require('./element.schema.js'),
			description:
				'Whether a resource is included in the guide as part of the rules defined by the guide, or just as an example of a resource that conforms to the rules and/or help implementers understand the intent of the guide.',
		},
		example: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Whether a resource is included in the guide as part of the rules defined by the guide, or just as an example of a resource that conforms to the rules and/or help implementers understand the intent of the guide.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).',
		},
		name: {
			type: GraphQLString,
			description:
				'A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A description of the reason that a resource has been included in the implementation guide.',
		},
		description: {
			type: GraphQLString,
			description:
				'A description of the reason that a resource has been included in the implementation guide.',
		},
		_acronym: {
			type: require('./element.schema.js'),
			description:
				'A short code that may be used to identify the resource throughout the implementation guide.',
		},
		acronym: {
			type: GraphQLString,
			description:
				'A short code that may be used to identify the resource throughout the implementation guide.',
		},
		_sourceUri: {
			type: require('./element.schema.js'),
			description: 'Where this resource is found.',
		},
		sourceUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Where this resource is found.',
		},
		sourceReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name:
						'ImplementationGuidepackageresourcesourceReference_sourceReference_Union',
					description: 'Where this resource is found.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description: 'Where this resource is found.',
		},
		exampleFor: {
			type: new GraphQLUnionType({
				name: 'ImplementationGuidepackageresourceexampleFor_exampleFor_Union',
				description:
					'Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.',
				types: () => [require('./structuredefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'StructureDefinition') {
						return require('./structuredefinition.schema.js');
					}
				},
			}),
			description:
				'Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.',
		},
	}),
});
