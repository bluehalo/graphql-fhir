const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConformanceImplementation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceImplementation_Input',
	description: 'Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Information about the specific installation that this conformance statement relates to.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Information about the specific installation that this conformance statement relates to.'
		},
		url: {
			type: UriScalar,
			description: 'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.'
		}
	})
});
