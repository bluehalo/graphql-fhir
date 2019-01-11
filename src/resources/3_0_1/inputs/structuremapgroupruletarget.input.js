const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary StructureMapgroupruletarget Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapgroupruletarget_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_context: {
			type: require('./element.input.js'),
			description: 'Type or variable this rule applies to.',
		},
		context: {
			type: IdScalar,
			description: 'Type or variable this rule applies to.',
		},
		_contextType: {
			type: require('./element.input.js'),
			description: 'How to interpret the context.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-context-type
		contextType: {
			type: CodeScalar,
			description: 'How to interpret the context.',
		},
		_element: {
			type: require('./element.input.js'),
			description: 'Field to create in the context.',
		},
		element: {
			type: GraphQLString,
			description: 'Field to create in the context.',
		},
		_variable: {
			type: require('./element.input.js'),
			description:
				'Named context for field, if desired, and a field is specified.',
		},
		variable: {
			type: IdScalar,
			description:
				'Named context for field, if desired, and a field is specified.',
		},
		_listMode: {
			type: require('./element.input.js'),
			description: 'If field is a list, how to manage the list.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-target-list-mode
		listMode: {
			type: new GraphQLList(CodeScalar),
			description: 'If field is a list, how to manage the list.',
		},
		_listRuleId: {
			type: require('./element.input.js'),
			description: 'Internal rule reference for shared list items.',
		},
		listRuleId: {
			type: IdScalar,
			description: 'Internal rule reference for shared list items.',
		},
		_transform: {
			type: require('./element.input.js'),
			description: 'How the data is copied / created.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/map-transform
		transform: {
			type: CodeScalar,
			description: 'How the data is copied / created.',
		},
		parameter: {
			type: new GraphQLList(
				require('./structuremapgroupruletargetparameter.input.js'),
			),
			description: 'Parameters to the transform.',
		},
	}),
});
