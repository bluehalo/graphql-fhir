const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CompartmentDefinitionResource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CompartmentDefinitionResource',
	description: 'Information about how a resource is related to the compartment.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name of a resource supported by the server.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'The name of a resource supported by the server.'
		},
		param: {
			type: new GraphQLList(GraphQLString),
			description: 'The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.'
		},
		_param: {
			type: require('./element.schema'),
			description: 'The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Additional documentation about the resource and compartment.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'Additional documentation about the resource and compartment.'
		}
	})
});
