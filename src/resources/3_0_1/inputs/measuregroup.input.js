const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Measure.group Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MeasureGroup_Input',
	description: 'A group of population criteria for the measure.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: new GraphQLNonNull(require('./identifier.input')),
			description: 'A unique identifier for the group. This identifier will used to report data for the group in the measure report.'
		},
		name: {
			type: GraphQLString,
			description: 'Optional name or short description of this group.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Optional name or short description of this group.'
		},
		description: {
			type: GraphQLString,
			description: 'The human readable description of this population group.'
		},
		_description: {
			type: require('./element.input'),
			description: 'The human readable description of this population group.'
		},
		population: {
			type: new GraphQLList(require('./measuregrouppopulation.input')),
			description: 'A population criteria for the measure.'
		},
		stratifier: {
			type: new GraphQLList(require('./measuregroupstratifier.input')),
			description: 'The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path.'
		}
	})
});
