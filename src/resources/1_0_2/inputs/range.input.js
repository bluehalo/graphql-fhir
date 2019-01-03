const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Range Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Range_Input',
	description: 'Base StructureDefinition for Range Type.',
	fields: () => extendSchema(require('./element.input'), {
		low: {
			type: require('./quantity.input'),
			description: 'The low limit. The boundary is inclusive.'
		},
		high: {
			type: require('./quantity.input'),
			description: 'The high limit. The boundary is inclusive.'
		}
	})
});
