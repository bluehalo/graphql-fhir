const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ImplementationGuidedefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImplementationGuidedefinition_Input',
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
		grouping: {
			type: new GraphQLList(
				require('./implementationguidedefinitiongrouping.input.js'),
			),
			description:
				'A logical group of resources. Logical groups can be used when building pages.',
		},
		resource: {
			type: new GraphQLList(
				new GraphQLNonNull(
					require('./implementationguidedefinitionresource.input.js'),
				),
			),
			description:
				'A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.',
		},
		page: {
			type: require('./implementationguidedefinitionpage.input.js'),
			description:
				'A page / section in the implementation guide. The root page is the implementation guide home page.',
		},
		parameter: {
			type: new GraphQLList(
				require('./implementationguidedefinitionparameter.input.js'),
			),
			description: 'Defines how IG is built by tools.',
		},
		template: {
			type: new GraphQLList(
				require('./implementationguidedefinitiontemplate.input.js'),
			),
			description: 'A template for building resources.',
		},
	}),
});
