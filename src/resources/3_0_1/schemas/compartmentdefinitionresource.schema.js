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
		_code: {
			type: require('./element.schema.js'),
			description: 'The name of a resource supported by the server.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
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
