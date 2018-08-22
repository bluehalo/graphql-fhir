const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinitionBinding Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionBinding',
	description: 'Binds to a value set if this element is coded (code, Coding, CodeableConcept).',
	fields: () => extendSchema(require('./element.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/binding-strength
		strength: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.'
		},
		_strength: {
			type: require('./element.schema'),
			description: 'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.'
		},
		description: {
			type: GraphQLString,
			description: 'Describes the intended use of this particular set of codes.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Describes the intended use of this particular set of codes.'
		},
		valueSetUri: {
			type: UriScalar,
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.'
		},
		_valueSetUri: {
			type: require('./element.schema'),
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.'
		},
		valueSetReference: {
			type: require('./reference.schema'),
			description: 'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.'
		}
	})
});
