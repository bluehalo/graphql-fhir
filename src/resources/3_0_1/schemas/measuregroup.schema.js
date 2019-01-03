const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Measure.group Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureGroup',
	description: 'A group of population criteria for the measure.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: new GraphQLNonNull(require('./identifier.schema')),
			description: 'A unique identifier for the group. This identifier will used to report data for the group in the measure report.'
		},
		name: {
			type: GraphQLString,
			description: 'Optional name or short description of this group.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Optional name or short description of this group.'
		},
		description: {
			type: GraphQLString,
			description: 'The human readable description of this population group.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'The human readable description of this population group.'
		},
		population: {
			type: new GraphQLList(require('./measuregrouppopulation.schema')),
			description: 'A population criteria for the measure.'
		},
		stratifier: {
			type: new GraphQLList(require('./measuregroupstratifier.schema')),
			description: 'The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path.'
		}
	})
});
