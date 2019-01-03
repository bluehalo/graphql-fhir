const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary CodeableConcept Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeableConcept',
	description: 'Base StructureDefinition for CodeableConcept Type.',
	fields: () => extendSchema(require('./element.schema'), {
		coding: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A reference to a code defined by a terminology system.'
		},
		text: {
			type: GraphQLString,
			description: 'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.'
		}
	})
});
