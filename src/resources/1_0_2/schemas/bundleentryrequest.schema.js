const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Bundleentryrequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundleentryrequest',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_method: {
			type: require('./element.schema.js'),
			description:
				'The HTTP verb for this entry in either a update history, or a transaction/ transaction response.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/http-verb
		method: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The HTTP verb for this entry in either a update history, or a transaction/ transaction response.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'The URL for this entry, relative to the root (the address to which the request is posted).',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'The URL for this entry, relative to the root (the address to which the request is posted).',
		},
		_ifNoneMatch: {
			type: require('./element.schema.js'),
			description:
				"If the ETag values match, return a 304 Not modified status. See the API documentation for ['Conditional Read'](http.html#cread).",
		},
		ifNoneMatch: {
			type: GraphQLString,
			description:
				"If the ETag values match, return a 304 Not modified status. See the API documentation for ['Conditional Read'](http.html#cread).",
		},
		_ifModifiedSince: {
			type: require('./element.schema.js'),
			description:
				"Only perform the operation if the last updated date matches. See the API documentation for ['Conditional Read'](http.html#cread).",
		},
		ifModifiedSince: {
			type: InstantScalar,
			description:
				"Only perform the operation if the last updated date matches. See the API documentation for ['Conditional Read'](http.html#cread).",
		},
		_ifMatch: {
			type: require('./element.schema.js'),
			description:
				"Only perform the operation if the Etag value matches. For more information, see the API section ['Managing Resource Contention'](http.html#concurrency).",
		},
		ifMatch: {
			type: GraphQLString,
			description:
				"Only perform the operation if the Etag value matches. For more information, see the API section ['Managing Resource Contention'](http.html#concurrency).",
		},
		_ifNoneExist: {
			type: require('./element.schema.js'),
			description:
				"Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ['Conditional Create'](http.html#ccreate). This is just the query portion of the URL - what follows the '?' (not including the '?').",
		},
		ifNoneExist: {
			type: GraphQLString,
			description:
				"Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ['Conditional Create'](http.html#ccreate). This is just the query portion of the URL - what follows the '?' (not including the '?').",
		},
	}),
});
