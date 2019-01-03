const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary StructureMap.group Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapGroup_Input',
	description: 'Organizes the mapping into managable chunks for human review/ease of maintenance.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'A unique name for the group for the convenience of human readers.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A unique name for the group for the convenience of human readers.'
		},
		extends: {
			type: IdScalar,
			description: 'Another group that this group adds rules to.'
		},
		_extends: {
			type: require('./element.input'),
			description: 'Another group that this group adds rules to.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/map-group-type-mode
		typeMode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'If this is the default rule set to apply for thie source type, or this combination of types.'
		},
		_typeMode: {
			type: require('./element.input'),
			description: 'If this is the default rule set to apply for thie source type, or this combination of types.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Additional supporting documentation that explains the purpose of the group and the types of mappings within it.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'Additional supporting documentation that explains the purpose of the group and the types of mappings within it.'
		},
		input: {
			type: new GraphQLList(new GraphQLNonNull(require('./structuremapgroupinput.input'))),
			description: 'A name assigned to an instance of data. The instance must be provided when the mapping is invoked.'
		},
		rule: {
			type: new GraphQLList(new GraphQLNonNull(require('./structuremapgrouprule.input'))),
			description: 'Transform Rule from source to target.'
		}
	})
});
