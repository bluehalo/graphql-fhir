const { GraphQLInputObjectType, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ProcessResponse.processNote Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcessResponseProcessNote_Input',
	description:
		'Suite of processing notes or additional requirements if the processing has been held.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
			type: {
				type: require('./codeableconcept.input'),
				description: 'The note purpose: Print/Display.',
			},
			text: {
				type: GraphQLString,
				description: 'The note text.',
			},
			_text: {
				type: require('./element.input'),
				description: 'The note text.',
			},
		}),
});
