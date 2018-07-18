const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImmunizationRecommendation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationRecommendation_Input',
	description: 'Base StructureDefinition for ImmunizationRecommendation Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A unique identifier assigned to this particular recommendation record.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient the recommendations are for.'
		},
		recommendation: {
			type: new GraphQLList(new GraphQLNonNull(require('./immunizationrecommendationrecommendation.input'))),
			description: 'Vaccine administration recommendations.'
		}
	})
});
