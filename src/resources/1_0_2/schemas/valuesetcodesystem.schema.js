const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ValueSet.codeSystem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetCodeSystem',
	description: 'A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		system: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.'
		},
		version: {
			type: GraphQLString,
			description: 'The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.'
		},
		caseSensitive: {
			type: GraphQLBoolean,
			description: 'If code comparison is case sensitive when codes within this system are compared to each other.'
		},
		_caseSensitive: {
			type: require('./element.schema'),
			description: 'If code comparison is case sensitive when codes within this system are compared to each other.'
		},
		concept: {
			type: new GraphQLList(new GraphQLNonNull(require('./valuesetcodesystemconcept.schema'))),
			description: 'Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.'
		}
	})
});
