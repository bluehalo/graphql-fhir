const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinitionBase Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionBase',
	description: 'Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. This information is provided when the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot.',
	fields: () => extendSchema(require('./element.schema'), {
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.'
		},
		min: {
			type: new GraphQLNonNull(UnsignedIntScalar),
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
