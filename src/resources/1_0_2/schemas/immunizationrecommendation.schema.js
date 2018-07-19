const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImmunizationRecommendation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationRecommendation',
	description: 'Base StructureDefinition for ImmunizationRecommendation Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A unique identifier assigned to this particular recommendation record.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient for whom the recommendations are for.'
		},
		recommendation: {
			type: new GraphQLList(new GraphQLNonNull(require('./immunizationrecommendationrecommendation.schema'))),
			description: 'Vaccine administration recommendations.'
		}
	})
});
