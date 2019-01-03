const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Bundle.entry.request Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BundleEntryRequest_Input',
	description: 'Additional information about how this entry should be processed as part of a transaction.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/http-verb
		method: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The HTTP verb for this entry in either a change history, or a transaction/ transaction response.'
		},
		_method: {
			type: require('./element.input'),
			description: 'The HTTP verb for this entry in either a change history, or a transaction/ transaction response.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The URL for this entry, relative to the root (the address to which the request is posted).'
		},
		_url: {
			type: require('./element.input'),
			description: 'The URL for this entry, relative to the root (the address to which the request is posted).'
		},
		ifNoneMatch: {
			type: GraphQLString,
			description: 'If the ETag values match, return a 304 Not Modified status. See the API documentation for [\'Conditional Read\'](http.html#cread).'
		},
		_ifNoneMatch: {
			type: require('./element.input'),
			description: 'If the ETag values match, return a 304 Not Modified status. See the API documentation for [\'Conditional Read\'](http.html#cread).'
		},
		ifModifiedSince: {
			type: InstantScalar,
			description: 'Only perform the operation if the last updated date matches. See the API documentation for [\'Conditional Read\'](http.html#cread).'
		},
		_ifModifiedSince: {
			type: require('./element.input'),
			description: 'Only perform the operation if the last updated date matches. See the API documentation for [\'Conditional Read\'](http.html#cread).'
		},
		ifMatch: {
			type: GraphQLString,
			description: 'Only perform the operation if the Etag value matches. For more information, see the API section [\'Managing Resource Contention\'](http.html#concurrency).'
		},
		_ifMatch: {
			type: require('./element.input'),
			description: 'Only perform the operation if the Etag value matches. For more information, see the API section [\'Managing Resource Contention\'](http.html#concurrency).'
		},
		ifNoneExist: {
			type: GraphQLString,
			description: 'Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for [\'Conditional Create\'](http.html#ccreate). This is just the query portion of the URL - what follows the \'?\' (not including the \'?\').'
		},
		_ifNoneExist: {
			type: require('./element.input'),
			description: 'Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for [\'Conditional Create\'](http.html#ccreate). This is just the query portion of the URL - what follows the \'?\' (not including the \'?\').'
		}
	})
});
