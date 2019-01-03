const UriScalar = require('../scalars/uri.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



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
			description: 'The status code returned by processing this entry.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status code returned by processing this entry.'
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
			description: 'The etag for the resource, it the operation for the entry produced a versioned resource.'
		},
		_etag: {
			type: require('./element.input'),
			description: 'The etag for the resource, it the operation for the entry produced a versioned resource.'
		},
		lastModified: {
			type: InstantScalar,
			description: 'The date/time that the resource was modified on the server.'
		},
		_lastModified: {
			type: require('./element.input'),
			description: 'The date/time that the resource was modified on the server.'
		}
	})
});
