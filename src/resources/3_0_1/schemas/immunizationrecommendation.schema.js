const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ImmunizationRecommendationResourceType = new GraphQLEnumType({
	name: 'ImmunizationRecommendationResourceType',
	values: {
		ImmunizationRecommendation: { value: 'ImmunizationRecommendation' }
	}
});

/**
 * @name exports
 * @summary ImmunizationRecommendation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationRecommendation',
	description: 'Base StructureDefinition for ImmunizationRecommendation Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ImmunizationRecommendationResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A unique identifier assigned to this particular recommendation record.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient the recommendations are for.'
		},
		recommendation: {
			type: new GraphQLList(new GraphQLNonNull(require('./immunizationrecommendationrecommendation.schema'))),
			description: 'Vaccine administration recommendations.'
		}
	})
});
