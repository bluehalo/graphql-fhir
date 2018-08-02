const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MeasureGroupStratifier Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureGroupStratifier',
	description: 'The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'The identifier for the stratifier used to coordinate the reported data back to this stratifier.'
		},
		criteria: {
			type: GraphQLString,
			description: 'The criteria for the stratifier. This must be the name of an expression defined within a referenced library.'
		},
		_criteria: {
			type: require('./element.schema'),
			description: 'The criteria for the stratifier. This must be the name of an expression defined within a referenced library.'
		},
		path: {
			type: GraphQLString,
			description: 'The path to an element that defines the stratifier, specified as a valid FHIR resource path.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'The path to an element that defines the stratifier, specified as a valid FHIR resource path.'
		}
	})
});
