const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ImplementationGuidedefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuidedefinition',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		grouping: {
			type: new GraphQLList(
				require('./implementationguidedefinitiongrouping.schema.js'),
			),
			description:
				'A logical group of resources. Logical groups can be used when building pages.',
		},
		resource: {
			type: new GraphQLList(
				new GraphQLNonNull(
					require('./implementationguidedefinitionresource.schema.js'),
				),
			),
			description:
				'A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.',
		},
		page: {
			type: require('./implementationguidedefinitionpage.schema.js'),
			description:
				'A page / section in the implementation guide. The root page is the implementation guide home page.',
		},
		parameter: {
			type: new GraphQLList(
				require('./implementationguidedefinitionparameter.schema.js'),
			),
			description: 'Defines how IG is built by tools.',
		},
		template: {
			type: new GraphQLList(
				require('./implementationguidedefinitiontemplate.schema.js'),
			),
			description: 'A template for building resources.',
		},
	}),
});
