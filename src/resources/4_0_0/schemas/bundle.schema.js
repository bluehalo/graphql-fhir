const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Bundle Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundle',
	description: 'A container for a collection of resources.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Bundle_Enum_schema',
					values: { Bundle: { value: 'Bundle' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				"A persistent identifier for the bundle that won't change as a bundle is copied from server to server.",
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'Indicates the purpose of this bundle - how it is intended to be used.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the purpose of this bundle - how it is intended to be used.',
		},
		_timestamp: {
			type: require('./element.schema.js'),
			description:
				'The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.',
		},
		timestamp: {
			type: InstantScalar,
			description:
				'The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.',
		},
		_total: {
			type: require('./element.schema.js'),
			description:
				"If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.",
		},
		total: {
			type: UnsignedIntScalar,
			description:
				"If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.",
		},
		link: {
			type: new GraphQLList(require('./bundlelink.schema.js')),
			description: 'A series of links that provide context to this bundle.',
		},
		entry: {
			type: new GraphQLList(require('./bundleentry.schema.js')),
			description:
				'An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).',
		},
		signature: {
			type: require('./signature.schema.js'),
			description: 'Digital Signature - base64 encoded. XML-DSig or a JWT.',
		},
	}),
});
