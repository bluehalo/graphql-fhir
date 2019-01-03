const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary StructureMap.group.rule.target Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureMapGroupRuleTarget',
	description: 'Content to create because of this mapping rule.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			context: {
				type: IdScalar,
				description: 'Type or variable this rule applies to.',
			},
			_context: {
				type: require('./element.schema'),
				description: 'Type or variable this rule applies to.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/map-context-type
			contextType: {
				type: CodeScalar,
				description: 'How to interpret the context.',
			},
			_contextType: {
				type: require('./element.schema'),
				description: 'How to interpret the context.',
			},
			element: {
				type: GraphQLString,
				description: 'Field to create in the context.',
			},
			_element: {
				type: require('./element.schema'),
				description: 'Field to create in the context.',
			},
			variable: {
				type: IdScalar,
				description:
					'Named context for field, if desired, and a field is specified.',
			},
			_variable: {
				type: require('./element.schema'),
				description:
					'Named context for field, if desired, and a field is specified.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/map-target-list-mode
			listMode: {
				type: new GraphQLList(CodeScalar),
				description: 'If field is a list, how to manage the list.',
			},
			_listMode: {
				type: require('./element.schema'),
				description: 'If field is a list, how to manage the list.',
			},
			listRuleId: {
				type: IdScalar,
				description: 'Internal rule reference for shared list items.',
			},
			_listRuleId: {
				type: require('./element.schema'),
				description: 'Internal rule reference for shared list items.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/map-transform
			transform: {
				type: CodeScalar,
				description: 'How the data is copied / created.',
			},
			_transform: {
				type: require('./element.schema'),
				description: 'How the data is copied / created.',
			},
			parameter: {
				type: new GraphQLList(
					require('./structuremapgroupruletargetparameter.schema'),
				),
				description: 'Parameters to the transform.',
			},
		}),
});
