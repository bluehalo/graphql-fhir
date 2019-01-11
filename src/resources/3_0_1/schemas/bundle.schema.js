const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Bundle Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundle',
	description: 'Base StructureDefinition for Bundle Resource',
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				"A persistent identifier for the batch that won't change as a batch is copied from server to server.",
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'Indicates the purpose of this bundle - how it was intended to be used.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/bundle-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the purpose of this bundle - how it was intended to be used.',
		},
		_total: {
			type: require('./element.schema.js'),
			description:
				'If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).',
		},
		total: {
			type: UnsignedIntScalar,
			description:
				'If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).',
		},
		link: {
			type: new GraphQLList(require('./bundlelink.schema.js')),
			description: 'A series of links that provide context to this bundle.',
		},
		entry: {
			type: new GraphQLList(require('./bundleentry.schema.js')),
			description:
				'An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).',
		},
		signature: {
			type: require('./signature.schema.js'),
			description: 'Digital Signature - base64 encoded. XML-DSIg or a JWT.',
		},
	}),
});
