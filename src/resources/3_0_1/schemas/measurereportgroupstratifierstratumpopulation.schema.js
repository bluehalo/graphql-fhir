const { GraphQLObjectType, GraphQLInt } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MeasureReportGroupStratifierStratumPopulation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReportGroupStratifierStratumPopulation',
	description: 'The populations that make up the stratum, one for each type of population appropriate to the measure.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'The identifier of the population being reported, as defined by the population element of the measure.'
		},
		code: {
			type: require('./codeableconcept.schema'),
			description: 'The type of the population.'
		},
		count: {
			type: GraphQLInt,
			description: 'The number of members of the population in this stratum.'
		},
		_count: {
			type: require('./element.schema'),
			description: 'The number of members of the population in this stratum.'
		},
		patients: {
			type: require('./reference.schema'),
			description: 'This element refers to a List of patient level MeasureReport resources, one for each patient in this population in this stratum.'
		}
	})
});
