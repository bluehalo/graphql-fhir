const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinition.mapping Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionMapping_Input',
	description: 'Identifies a concept from an external specification that roughly corresponds to this element.',
	fields: () => extendSchema(require('./element.input'), {
		identity: {
			type: new GraphQLNonNull(IdScalar),
			description: 'An internal reference to the definition of a mapping.'
		},
		_identity: {
			type: require('./element.input'),
			description: 'An internal reference to the definition of a mapping.'
		},
		language: {
			type: CodeScalar,
			description: 'Identifies the computable language in which mapping.map is expressed.'
		},
		_language: {
			type: require('./element.input'),
			description: 'Identifies the computable language in which mapping.map is expressed.'
		},
		map: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Expresses what part of the target specification corresponds to this element.'
		},
		_map: {
			type: require('./element.input'),
			description: 'Expresses what part of the target specification corresponds to this element.'
		},
		comment: {
			type: GraphQLString,
			description: 'Comments that provide information about the mapping or its use.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'Comments that provide information about the mapping or its use.'
		}
	})
});
