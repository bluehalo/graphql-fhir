const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary StructureMapgroupruletarget Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureMapgroupruletarget',
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
		_context: {
			type: require('./element.schema.js'),
			description: 'Type or variable this rule applies to.',
		},
		context: {
			type: IdScalar,
			description: 'Type or variable this rule applies to.',
		},
		_contextType: {
			type: require('./element.schema.js'),
			description: 'How to interpret the context.',
		},
		contextType: {
			type: CodeScalar,
			description: 'How to interpret the context.',
		},
		_element: {
			type: require('./element.schema.js'),
			description: 'Field to create in the context.',
		},
		element: {
			type: GraphQLString,
			description: 'Field to create in the context.',
		},
		_variable: {
			type: require('./element.schema.js'),
			description:
				'Named context for field, if desired, and a field is specified.',
		},
		variable: {
			type: IdScalar,
			description:
				'Named context for field, if desired, and a field is specified.',
		},
		_listMode: {
			type: require('./element.schema.js'),
			description: 'If field is a list, how to manage the list.',
		},
		listMode: {
			type: new GraphQLList(CodeScalar),
			description: 'If field is a list, how to manage the list.',
		},
		_listRuleId: {
			type: require('./element.schema.js'),
			description: 'Internal rule reference for shared list items.',
		},
		listRuleId: {
			type: IdScalar,
			description: 'Internal rule reference for shared list items.',
		},
		_transform: {
			type: require('./element.schema.js'),
			description: 'How the data is copied / created.',
		},
		transform: {
			type: CodeScalar,
			description: 'How the data is copied / created.',
		},
		parameter: {
			type: new GraphQLList(
				require('./structuremapgroupruletargetparameter.schema.js'),
			),
			description: 'Parameters to the transform.',
		},
	}),
});
