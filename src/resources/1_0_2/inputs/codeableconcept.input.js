const { GraphQLInputObjectType, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CodeableConcept Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeableConcept_Input',
	description: 'Base StructureDefinition for CodeableConcept Type.',
	fields: () => extendSchema(require('./element.input'), {
		coding: {
			type: new GraphQLList(require('./coding.input')),
			description: 'A reference to a code defined by a terminology system.'
		},
		text: {
			type: GraphQLString,
			description: 'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.'
		},
		_text: {
			type: require('./element.input'),
			description: 'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.'
		}
	})
});
