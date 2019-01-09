const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ImplementationGuidedefinitiontemplate Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImplementationGuidedefinitiontemplate_Input',
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
		_code: {
			type: require('./element.input.js'),
			description: 'Type of template specified.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Type of template specified.',
		},
		_source: {
			type: require('./element.input.js'),
			description: 'The source location for the template.',
		},
		source: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The source location for the template.',
		},
		_scope: {
			type: require('./element.input.js'),
			description: 'The scope in which the template applies.',
		},
		scope: {
			type: GraphQLString,
			description: 'The scope in which the template applies.',
		},
	}),
});
