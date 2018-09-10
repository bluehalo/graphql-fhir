const UriScalar = require('../scalars/uri.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Bundle.entry.response Schema
 */
module.exports = new GraphQLObjectType({
	name: 'BundleEntryResponse',
	description: 'Additional information about how this entry should be processed as part of a transaction.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		status: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The status code returned by processing this entry.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status code returned by processing this entry.'
		},
		location: {
			type: UriScalar,
			description: 'The location header created by processing this operation.'
		},
		_location: {
			type: require('./element.schema'),
			description: 'The location header created by processing this operation.'
		},
		etag: {
			type: GraphQLString,
			description: 'The etag for the resource, it the operation for the entry produced a versioned resource.'
		},
		_etag: {
			type: require('./element.schema'),
			description: 'The etag for the resource, it the operation for the entry produced a versioned resource.'
		},
		lastModified: {
			type: InstantScalar,
			description: 'The date/time that the resource was modified on the server.'
		},
		_lastModified: {
			type: require('./element.schema'),
			description: 'The date/time that the resource was modified on the server.'
		}
	})
});
