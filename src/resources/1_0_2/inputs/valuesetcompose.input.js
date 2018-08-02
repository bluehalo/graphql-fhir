const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ValueSetCompose Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetCompose_Input',
	description: 'A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		import: {
			type: new GraphQLList(UriScalar),
			description: 'Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.'
		},
		_import: {
			type: require('./element.input'),
			description: 'Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.'
		},
		include: {
			type: new GraphQLList(require('./valuesetcomposeinclude.input')),
			description: 'Include one or more codes from a code system.'
		}
	})
});
