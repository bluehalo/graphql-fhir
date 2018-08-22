const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinitionBase Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionBase',
	description: 'Information about the base definition of the element, provided to make it unncessary for tools to trace the deviation of the element through the derived and related profiles. This information is only provided where the element definition represents a constraint on another element definition, and must be present if there is a base element definition.',
	fields: () => extendSchema(require('./element.schema'), {
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.'
		},
		min: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Minimum cardinality of the base element identified by the path.'
		},
		_min: {
			type: require('./element.schema'),
			description: 'Minimum cardinality of the base element identified by the path.'
		},
		max: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Maximum cardinality of the base element identified by the path.'
		},
		_max: {
			type: require('./element.schema'),
			description: 'Maximum cardinality of the base element identified by the path.'
		}
	})
});
