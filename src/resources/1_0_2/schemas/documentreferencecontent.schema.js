const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DocumentReferenceContent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentReferenceContent',
	description: 'The document and format referenced. There may be multiple content element repetitions, each with a different format.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		attachment: {
			type: new GraphQLNonNull(require('./attachment.schema')),
			description: 'The document or url of the document along with critical metadata to prove content has integrity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/formatcodes
		format: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.'
		}
	})
});
