const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DocumentReference.relatesTo Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReferenceRelatesTo_Input',
	description: 'Relationships that this document has with other document references that already exist.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/document-relationship-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship that this document has with anther document.'
		},
		_code: {
			type: require('./element.input'),
			description: 'The type of relationship that this document has with anther document.'
		},
		target: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The target document of this relationship.'
		}
	})
});
