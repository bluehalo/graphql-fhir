const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExpansionProfile.excludedSystem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileExcludedSystem_Input',
	description: 'Code system, or a particular version of a code system to be excluded from value set expansions.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		system: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI which is the code system to be excluded.'
		},
		_system: {
			type: require('./element.input'),
			description: 'An absolute URI which is the code system to be excluded.'
		},
		version: {
			type: GraphQLString,
			description: 'The version of the code system from which codes in the expansion should be excluded.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The version of the code system from which codes in the expansion should be excluded.'
		}
	})
});
