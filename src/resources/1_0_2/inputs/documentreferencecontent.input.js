const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DocumentReference.content Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReferenceContent_Input',
	description: 'The document and format referenced. There may be multiple content element repetitions, each with a different format.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		attachment: {
			type: new GraphQLNonNull(require('./attachment.input')),
			description: 'The document or url of the document along with critical metadata to prove content has integrity.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/formatcodes
		format: {
			type: new GraphQLList(require('./coding.input')),
			description: 'An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.'
		}
	})
});
