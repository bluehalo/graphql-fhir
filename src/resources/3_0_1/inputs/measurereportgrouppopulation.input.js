const { GraphQLInputObjectType, GraphQLInt } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MeasureReport.group.population Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MeasureReportGroupPopulation_Input',
	description: 'The populations that make up the population group, one for each type of population appropriate for the measure.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'The identifier of the population being reported, as defined by the population element of the measure.'
		},
		code: {
			type: require('./codeableconcept.input'),
			description: 'The type of the population.'
		},
		count: {
			type: GraphQLInt,
			description: 'The number of members of the population.'
		},
		_count: {
			type: require('./element.input'),
			description: 'The number of members of the population.'
		},
		patients: {
			type: require('./reference.input'),
			description: 'This element refers to a List of patient level MeasureReport resources, one for each patient in this population.'
		}
	})
});
