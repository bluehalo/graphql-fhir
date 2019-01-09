const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Bundleentryresponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundleentryresponse',
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
		_status: {
			type: require('./element.schema.js'),
			description: 'The status code returned by processing this entry.',
		},
		status: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The status code returned by processing this entry.',
		},
		_location: {
			type: require('./element.schema.js'),
			description: 'The location header created by processing this operation.',
		},
		location: {
			type: UriScalar,
			description: 'The location header created by processing this operation.',
		},
		_etag: {
			type: require('./element.schema.js'),
			description:
				'The etag for the resource, it the operation for the entry produced a versioned resource.',
		},
		etag: {
			type: GraphQLString,
			description:
				'The etag for the resource, it the operation for the entry produced a versioned resource.',
		},
		_lastModified: {
			type: require('./element.schema.js'),
			description:
				'The date/time that the resource was modified on the server.',
		},
		lastModified: {
			type: InstantScalar,
			description:
				'The date/time that the resource was modified on the server.',
		},
	}),
});
