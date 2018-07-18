const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MeasureGroupPopulation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MeasureGroupPopulation_Input',
	description: 'A population criteria for the measure.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'A unique identifier for the population criteria. This identifier is used to report data against this criteria within the measure report.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/measure-population
		code: {
			type: require('./codeableconcept.input'),
			description: 'The type of population criteria.'
		},
		name: {
			type: GraphQLString,
			description: 'Optional name or short description of this population.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Optional name or short description of this population.'
		},
		description: {
			type: GraphQLString,
			description: 'The human readable description of this population criteria.'
		},
		_description: {
			type: require('./element.input'),
			description: 'The human readable description of this population criteria.'
		},
		criteria: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.'
		},
		_criteria: {
			type: require('./element.input'),
			description: 'The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.'
		}
	})
});
