const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ValueSet.expansion.parameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetExpansionParameter',
	description: 'A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the parameter.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of the parameter.'
		},
		valueString: {
			type: GraphQLString,
			description: 'The value of the parameter.'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'The value of the parameter.'
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'The value of the parameter.'
		},
		_valueBoolean: {
			type: require('./element.schema'),
			description: 'The value of the parameter.'
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'The value of the parameter.'
		},
		_valueInteger: {
			type: require('./element.schema'),
			description: 'The value of the parameter.'
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'The value of the parameter.'
		},
		_valueDecimal: {
			type: require('./element.schema'),
			description: 'The value of the parameter.'
		},
		valueUri: {
			type: UriScalar,
			description: 'The value of the parameter.'
		},
		_valueUri: {
			type: require('./element.schema'),
			description: 'The value of the parameter.'
		},
		valueCode: {
			type: CodeScalar,
			description: 'The value of the parameter.'
		},
		_valueCode: {
			type: require('./element.schema'),
			description: 'The value of the parameter.'
		}
	})
});
