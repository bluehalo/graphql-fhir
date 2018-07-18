const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ValueSetCompose Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetCompose',
	description: 'A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		import: {
			type: new GraphQLList(UriScalar),
			description: 'Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.'
		},
		_import: {
			type: require('./element.schema'),
			description: 'Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.'
		},
		include: {
			type: new GraphQLList(require('./valuesetcomposeinclude.schema')),
			description: 'Include one or more codes from a code system.'
		}
	})
});
