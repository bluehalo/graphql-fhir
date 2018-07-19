const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let ImmunizationRecommendationResourceInputType = new GraphQLEnumType({
	name: 'ImmunizationRecommendationResourceInputType',
	values: {
		ImmunizationRecommendation: { value: 'ImmunizationRecommendation' }
	}
});

/**
 * @name exports
 * @summary ImmunizationRecommendation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationRecommendation_Input',
	description: 'Base StructureDefinition for ImmunizationRecommendation Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ImmunizationRecommendationResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A unique identifier assigned to this particular recommendation record.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient for whom the recommendations are for.'
		},
		recommendation: {
			type: new GraphQLList(new GraphQLNonNull(require('./immunizationrecommendationrecommendation.input'))),
			description: 'Vaccine administration recommendations.'
		}
	})
});
