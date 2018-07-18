const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ElementDefinitionBinding Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionBinding_Input',
	description: 'Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).',
	fields: () => extendSchema(require('./element.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/binding-strength
		strength: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.'
		},
		_strength: {
			type: require('./element.input'),
			description: 'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.'
		},
		description: {
			type: GraphQLString,
			description: 'Describes the intended use of this particular set of codes.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Describes the intended use of this particular set of codes.'
		},
		valueSetUri: {
			type: UriScalar,
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.'
		},
		_valueSetUri: {
			type: require('./element.input'),
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.'
		},
		valueSetReference: {
			type: require('./reference.input'),
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.'
		}
	})
});
