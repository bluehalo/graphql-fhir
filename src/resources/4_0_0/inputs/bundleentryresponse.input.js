const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Bundleentryresponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Bundleentryresponse_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.',
		},
		status: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.',
		},
		_location: {
			type: require('./element.input.js'),
			description:
				'The location header created by processing this operation, populated if the operation returns a location.',
		},
		location: {
			type: UriScalar,
			description:
				'The location header created by processing this operation, populated if the operation returns a location.',
		},
		_etag: {
			type: require('./element.input.js'),
			description:
				'The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).',
		},
		etag: {
			type: GraphQLString,
			description:
				'The Etag for the resource, if the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).',
		},
		_lastModified: {
			type: require('./element.input.js'),
			description:
				'The date/time that the resource was modified on the server.',
		},
		lastModified: {
			type: InstantScalar,
			description:
				'The date/time that the resource was modified on the server.',
		},
		outcome: {
			type: GraphQLString,
			description:
				'An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.',
		},
	}),
});
