const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Measure.group.population Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureGroupPopulation',
	description: 'A population criteria for the measure.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			identifier: {
				type: require('./identifier.schema'),
				description:
					'A unique identifier for the population criteria. This identifier is used to report data against this criteria within the measure report.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/measure-population
			code: {
				type: require('./codeableconcept.schema'),
				description: 'The type of population criteria.',
			},
			name: {
				type: GraphQLString,
				description: 'Optional name or short description of this population.',
			},
			_name: {
				type: require('./element.schema'),
				description: 'Optional name or short description of this population.',
			},
			description: {
				type: GraphQLString,
				description:
					'The human readable description of this population criteria.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'The human readable description of this population criteria.',
			},
			criteria: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.',
			},
			_criteria: {
				type: require('./element.schema'),
				description:
					'The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.',
			},
		}),
});
