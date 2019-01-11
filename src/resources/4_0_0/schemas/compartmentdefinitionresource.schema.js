const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CompartmentDefinitionresource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CompartmentDefinitionresource',
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
		_code: {
			type: require('./element.schema.js'),
			description: 'The name of a resource supported by the server.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name of a resource supported by the server.',
		},
		_param: {
			type: require('./element.schema.js'),
			description:
				'The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.',
		},
		param: {
			type: new GraphQLList(GraphQLString),
			description:
				'The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.',
		},
		_documentation: {
			type: require('./element.schema.js'),
			description:
				'Additional documentation about the resource and compartment.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'Additional documentation about the resource and compartment.',
		},
	}),
});
