const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ElementDefinition.binding Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionBinding_Input',
	description:
		'Binds to a value set if this element is coded (code, Coding, CodeableConcept).',
	fields: () =>
		extendSchema(require('./element.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/binding-strength
			strength: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.',
			},
			_strength: {
				type: require('./element.input'),
				description:
					'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.',
			},
			description: {
				type: GraphQLString,
				description:
					'Describes the intended use of this particular set of codes.',
			},
			_description: {
				type: require('./element.input'),
				description:
					'Describes the intended use of this particular set of codes.',
			},
			valueSetUri: {
				type: UriScalar,
				description:
					'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.',
			},
			_valueSetUri: {
				type: require('./element.input'),
				description:
					'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.',
			},
			valueSetReference: {
				type: require('./reference.input'),
				description:
					'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.',
			},
		}),
});
