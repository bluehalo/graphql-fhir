const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Composition.relatesTo Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CompositionRelatesTo',
	description: 'Relationships that this composition has with other compositions or documents that already exist.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/document-relationship-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship that this composition has with anther composition or document.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'The type of relationship that this composition has with anther composition or document.'
		},
		targetIdentifier: {
			type: new GraphQLNonNull(require('./identifier.schema')),
			description: 'The target composition/document of this relationship.'
		},
		targetReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The target composition/document of this relationship.'
		}
	})
});
