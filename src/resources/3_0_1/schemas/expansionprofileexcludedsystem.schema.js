const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExpansionProfileExcludedSystem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExpansionProfileExcludedSystem',
	description: 'Code system, or a particular version of a code system to be excluded from value set expansions.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		system: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI which is the code system to be excluded.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'An absolute URI which is the code system to be excluded.'
		},
		version: {
			type: GraphQLString,
			description: 'The version of the code system from which codes in the expansion should be excluded.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The version of the code system from which codes in the expansion should be excluded.'
		}
	})
});
