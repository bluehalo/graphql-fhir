const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Identifier Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Identifier',
	description: 'Base StructureDefinition for Identifier Type.',
	fields: () => extendSchema(require('./element.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/identifier-use
		use: {
			type: CodeScalar,
			description: 'The purpose of this identifier.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'The purpose of this identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/identifier-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.'
		},
		system: {
			type: UriScalar,
			description: 'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.'
		},
		value: {
			type: GraphQLString,
			description: 'The portion of the identifier typically relevant to the user and which is unique within the context of the system.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The portion of the identifier typically relevant to the user and which is unique within the context of the system.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Time period during which identifier is/was valid for use.'
		},
		assigner: {
			type: require('./reference.schema'),
			description: 'Organization that issued/manages the identifier.'
		}
	})
});
