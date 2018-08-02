const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProcessResponseNotes Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcessResponseNotes',
	description: 'Suite of processing note or additional requirements is the processing has been held.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./coding.schema'),
			description: 'The note purpose: Print/Display.'
		},
		text: {
			type: GraphQLString,
			description: 'The note text.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'The note text.'
		}
	})
});
