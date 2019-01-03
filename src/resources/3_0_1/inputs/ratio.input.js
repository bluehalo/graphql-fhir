const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Ratio Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Ratio_Input',
	description: 'Base StructureDefinition for Ratio Type.',
	fields: () =>
		extendSchema(require('./element.input'), {
			numerator: {
				type: require('./quantity.input'),
				description: 'The value of the numerator.',
			},
			denominator: {
				type: require('./quantity.input'),
				description: 'The value of the denominator.',
			},
		}),
});
