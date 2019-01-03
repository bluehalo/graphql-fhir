const { GraphQLInputObjectType, GraphQLInt, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ImmunizationRecommendation.recommendation.protocol Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationRecommendationRecommendationProtocol_Input',
	description: 'Contains information about the protocol under which the vaccine was administered.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		doseSequence: {
			type: GraphQLInt,
			description: 'Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.'
		},
		_doseSequence: {
			type: require('./element.input'),
			description: 'Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.'
		},
		description: {
			type: GraphQLString,
			description: 'Contains the description about the protocol under which the vaccine was administered.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Contains the description about the protocol under which the vaccine was administered.'
		},
		authority: {
			type: require('./reference.input'),
			description: 'Indicates the authority who published the protocol.  For example, ACIP.'
		},
		series: {
			type: GraphQLString,
			description: 'One possible path to achieve presumed immunity against a disease - within the context of an authority.'
		},
		_series: {
			type: require('./element.input'),
			description: 'One possible path to achieve presumed immunity against a disease - within the context of an authority.'
		}
	})
});
