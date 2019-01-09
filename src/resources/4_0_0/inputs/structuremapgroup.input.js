const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary StructureMapgroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapgroup_Input',
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
		_name: {
			type: require('./element.input.js'),
			description:
				'A unique name for the group for the convenience of human readers.',
		},
		name: {
			type: new GraphQLNonNull(IdScalar),
			description:
				'A unique name for the group for the convenience of human readers.',
		},
		_extends: {
			type: require('./element.input.js'),
			description: 'Another group that this group adds rules to.',
		},
		extends: {
			type: IdScalar,
			description: 'Another group that this group adds rules to.',
		},
		_typeMode: {
			type: require('./element.input.js'),
			description:
				'If this is the default rule set to apply for the source type or this combination of types.',
		},
		typeMode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'If this is the default rule set to apply for the source type or this combination of types.',
		},
		_documentation: {
			type: require('./element.input.js'),
			description:
				'Additional supporting documentation that explains the purpose of the group and the types of mappings within it.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'Additional supporting documentation that explains the purpose of the group and the types of mappings within it.',
		},
		input: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./structuremapgroupinput.input.js')),
			),
			description:
				'A name assigned to an instance of data. The instance must be provided when the mapping is invoked.',
		},
		rule: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./structuremapgrouprule.input.js')),
			),
			description: 'Transform Rule from source to target.',
		},
	}),
});
