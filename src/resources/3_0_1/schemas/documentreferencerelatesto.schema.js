const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary DocumentReference.relatesTo Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentReferenceRelatesTo',
	description: 'Relationships that this document has with other document references that already exist.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/document-relationship-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship that this document has with anther document.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'The type of relationship that this document has with anther document.'
		},
		target: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The target document of this relationship.'
		}
	})
});
