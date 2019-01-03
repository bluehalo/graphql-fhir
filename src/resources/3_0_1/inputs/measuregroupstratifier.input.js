const { GraphQLInputObjectType, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Measure.group.stratifier Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MeasureGroupStratifier_Input',
	description: 'The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'The identifier for the stratifier used to coordinate the reported data back to this stratifier.'
		},
		criteria: {
			type: GraphQLString,
			description: 'The criteria for the stratifier. This must be the name of an expression defined within a referenced library.'
		},
		_criteria: {
			type: require('./element.input'),
			description: 'The criteria for the stratifier. This must be the name of an expression defined within a referenced library.'
		},
		path: {
			type: GraphQLString,
			description: 'The path to an element that defines the stratifier, specified as a valid FHIR resource path.'
		},
		_path: {
			type: require('./element.input'),
			description: 'The path to an element that defines the stratifier, specified as a valid FHIR resource path.'
		}
	})
});
