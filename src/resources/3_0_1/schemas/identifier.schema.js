const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLString
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

let IdentifierUseType = new GraphQLEnumType({
	name: 'IdentifierUseType',
	values: {
		usual: { value: 'usual' },
		official: { value: 'official' },
		temp: { value: 'temp' },
		secondary: { value: 'secondary' }
	}
});

/**
 * @name exports
 * @summary Identifier Fields
 */
let Identifier = new GraphQLObjectType({
	name: 'Identifier',
	description: 'A technical identifier - identifies some entity uniquely and unambiguously.',
	fields: () => extendSchema(require('./element.schema'), {
		use: {
			type: IdentifierUseType,
			description: 'The purpose of this identifier.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Extensions for use'
		},
		system: {
			type: GraphQLString,
			description: 'Establishes the namespace for the value - that is, a URL that describes a set values that are unique.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'Extensions for system'
		},
		value: {
			type: GraphQLString,
			description: 'The portion of the identifier typically relevant to the user and which is unique within the context of the system.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'Extensions for value'
		},
		type: {
			type: require('./codeableconcept.schema'),
			description: 'A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Time period when id is/was valid for use.'
		},
		assigner: {
			type: require('./reference.schema'),
			description: 'Organization that issued/manages the identifier.'
		}
	})
});

module.exports = Identifier;
