const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CompositionRelatesTo Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CompositionRelatesTo_Input',
	description: 'Relationships that this composition has with other compositions or documents that already exist.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/document-relationship-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship that this composition has with anther composition or document.'
		},
		_code: {
			type: require('./element.input'),
			description: 'The type of relationship that this composition has with anther composition or document.'
		},
		targetIdentifier: {
			type: new GraphQLNonNull(require('./identifier.input')),
			description: 'The target composition/document of this relationship.'
		},
		targetReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The target composition/document of this relationship.'
		}
	})
});
