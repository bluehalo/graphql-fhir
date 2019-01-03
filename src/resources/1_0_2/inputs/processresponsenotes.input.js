const { GraphQLInputObjectType, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ProcessResponse.notes Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcessResponseNotes_Input',
	description: 'Suite of processing note or additional requirements is the processing has been held.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./coding.input'),
			description: 'The note purpose: Print/Display.'
		},
		text: {
			type: GraphQLString,
			description: 'The note text.'
		},
		_text: {
			type: require('./element.input'),
			description: 'The note text.'
		}
	})
});
