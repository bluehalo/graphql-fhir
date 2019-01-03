const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ElementDefinition.base Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionBase_Input',
	description: 'Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. This information is provided when the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot.',
	fields: () => extendSchema(require('./element.input'), {
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.'
		},
		_path: {
			type: require('./element.input'),
			description: 'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.'
		},
		min: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'Minimum cardinality of the base element identified by the path.'
		},
		_min: {
			type: require('./element.input'),
			description: 'Minimum cardinality of the base element identified by the path.'
		},
		max: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Maximum cardinality of the base element identified by the path.'
		},
		_max: {
			type: require('./element.input'),
			description: 'Maximum cardinality of the base element identified by the path.'
		}
	})
});
