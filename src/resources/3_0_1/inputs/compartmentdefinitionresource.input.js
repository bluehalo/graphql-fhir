const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary CompartmentDefinition.resource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CompartmentDefinitionResource_Input',
	description: 'Information about how a resource is related to the compartment.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name of a resource supported by the server.'
		},
		_code: {
			type: require('./element.input'),
			description: 'The name of a resource supported by the server.'
		},
		param: {
			type: new GraphQLList(GraphQLString),
			description: 'The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.'
		},
		_param: {
			type: require('./element.input'),
			description: 'The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Additional documentation about the resource and compartment.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'Additional documentation about the resource and compartment.'
		}
	})
});
