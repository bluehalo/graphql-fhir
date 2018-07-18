const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLBoolean, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ValueSetExpansionContains Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetExpansionContains',
	description: 'The codes that are contained in the value set expansion.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		system: {
			type: UriScalar,
			description: 'An absolute URI which is the code system in which the code for this item in the expansion is defined.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'An absolute URI which is the code system in which the code for this item in the expansion is defined.'
		},
		abstract: {
			type: GraphQLBoolean,
			description: 'If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.'
		},
		_abstract: {
			type: require('./element.schema'),
			description: 'If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.'
		},
		inactive: {
			type: GraphQLBoolean,
			description: 'If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data.'
		},
		_inactive: {
			type: require('./element.schema'),
			description: 'If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data.'
		},
		version: {
			type: GraphQLString,
			description: 'The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.'
		},
		code: {
			type: CodeScalar,
			description: 'The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.'
		},
		display: {
			type: GraphQLString,
			description: 'The recommended display for this item in the expansion.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'The recommended display for this item in the expansion.'
		}
	})
});
