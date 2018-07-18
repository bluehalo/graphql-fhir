const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary OperationDefinitionParameterBinding Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationDefinitionParameterBinding_Input',
	description: 'Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/binding-strength
		strength: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.'
		},
		_strength: {
			type: require('./element.input'),
			description: 'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.'
		},
		valueSetUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.'
		},
		_valueSetUri: {
			type: require('./element.input'),
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.'
		},
		valueSetReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.'
		}
	})
});
