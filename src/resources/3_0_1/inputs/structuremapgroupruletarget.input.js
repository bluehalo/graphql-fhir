const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary StructureMapGroupRuleTarget Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapGroupRuleTarget_Input',
	description: 'Content to create because of this mapping rule.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		context: {
			type: IdScalar,
			description: 'Type or variable this rule applies to.'
		},
		_context: {
			type: require('./element.input'),
			description: 'Type or variable this rule applies to.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/map-context-type
		contextType: {
			type: CodeScalar,
			description: 'How to interpret the context.'
		},
		_contextType: {
			type: require('./element.input'),
			description: 'How to interpret the context.'
		},
		element: {
			type: GraphQLString,
			description: 'Field to create in the context.'
		},
		_element: {
			type: require('./element.input'),
			description: 'Field to create in the context.'
		},
		variable: {
			type: IdScalar,
			description: 'Named context for field, if desired, and a field is specified.'
		},
		_variable: {
			type: require('./element.input'),
			description: 'Named context for field, if desired, and a field is specified.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/map-target-list-mode
		listMode: {
			type: new GraphQLList(CodeScalar),
			description: 'If field is a list, how to manage the list.'
		},
		_listMode: {
			type: require('./element.input'),
			description: 'If field is a list, how to manage the list.'
		},
		listRuleId: {
			type: IdScalar,
			description: 'Internal rule reference for shared list items.'
		},
		_listRuleId: {
			type: require('./element.input'),
			description: 'Internal rule reference for shared list items.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/map-transform
		transform: {
			type: CodeScalar,
			description: 'How the data is copied / created.'
		},
		_transform: {
			type: require('./element.input'),
			description: 'How the data is copied / created.'
		},
		parameter: {
			type: new GraphQLList(require('./structuremapgroupruletargetparameter.input')),
			description: 'Parameters to the transform.'
		}
	})
});
