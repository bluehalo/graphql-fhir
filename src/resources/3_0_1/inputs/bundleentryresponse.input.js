const UriScalar = require('../scalars/uri.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Bundle.entry.response Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BundleEntryResponse_Input',
	description: 'Additional information about how this entry should be processed as part of a transaction.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		status: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.'
		},
		location: {
			type: UriScalar,
			description: 'The location header created by processing this operation.'
		},
		_location: {
			type: require('./element.input'),
			description: 'The location header created by processing this operation.'
		},
		etag: {
			type: GraphQLString,
			description: 'The etag for the resource, it the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).'
		},
		_etag: {
			type: require('./element.input'),
			description: 'The etag for the resource, it the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).'
		},
		lastModified: {
			type: InstantScalar,
			description: 'The date/time that the resource was modified on the server.'
		},
		_lastModified: {
			type: require('./element.input'),
			description: 'The date/time that the resource was modified on the server.'
		}
		// TODO: Figure out how to handle this
		// outcome: {
		// 	type: require('./resourcelist.input'),
		// 	description: 'An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.'
		// }
	})
});
