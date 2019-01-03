const CodeScalar = require('../scalars/code.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let BundleResourceInputType = new GraphQLEnumType({
	name: 'BundleResourceInputType',
	values: {
		Bundle: { value: 'Bundle' }
	}
});

/**
 * @name exports
 * @summary Bundle Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Bundle_Input',
	description: 'Base StructureDefinition for Bundle Resource.',
	fields: () => extendSchema(require('./resource.input'), {
		resourceType: {
			type: new GraphQLNonNull(BundleResourceInputType),
			description: 'Type of this resource.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/bundle-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the purpose of this bundle- how it was intended to be used.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Indicates the purpose of this bundle- how it was intended to be used.'
		},
		total: {
			type: UnsignedIntScalar,
			description: 'If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).'
		},
		_total: {
			type: require('./element.input'),
			description: 'If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).'
		},
		link: {
			type: new GraphQLList(require('./bundlelink.input')),
			description: 'A series of links that provide context to this bundle.'
		},
		entry: {
			type: new GraphQLList(require('./bundleentry.input')),
			description: 'An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).'
		},
		signature: {
			type: require('./signature.input'),
			description: 'Digital Signature - base64 encoded. XML DigSIg or a JWT.'
		}
	})
});
