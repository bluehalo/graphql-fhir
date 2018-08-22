const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Identifier Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Identifier_Input',
	description: 'Base StructureDefinition for Identifier Type.',
	fields: () => extendSchema(require('./element.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/identifier-use
		use: {
			type: CodeScalar,
			description: 'The purpose of this identifier.'
		},
		_use: {
			type: require('./element.input'),
			description: 'The purpose of this identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/identifier-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.'
		},
		system: {
			type: UriScalar,
			description: 'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.'
		},
		_system: {
			type: require('./element.input'),
			description: 'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.'
		},
		value: {
			type: GraphQLString,
			description: 'The portion of the identifier typically relevant to the user and which is unique within the context of the system.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The portion of the identifier typically relevant to the user and which is unique within the context of the system.'
		},
		period: {
			type: require('./period.input'),
			description: 'Time period during which identifier is/was valid for use.'
		},
		assigner: {
			type: require('./reference.input'),
			description: 'Organization that issued/manages the identifier.'
		}
	})
});
