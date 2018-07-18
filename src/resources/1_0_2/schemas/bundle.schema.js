const CodeScalar = require('../scalars/code.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Bundle Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Bundle',
	description: 'Base StructureDefinition for Bundle Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/bundle-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the purpose of this bundle- how it was intended to be used.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Indicates the purpose of this bundle- how it was intended to be used.'
		},
		total: {
			type: UnsignedIntScalar,
			description: 'If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).'
		},
		_total: {
			type: require('./element.schema'),
			description: 'If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).'
		},
		link: {
			type: new GraphQLList(require('./bundlelink.schema')),
			description: 'A series of links that provide context to this bundle.'
		},
		entry: {
			type: new GraphQLList(require('./bundleentry.schema')),
			description: 'An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).'
		},
		signature: {
			type: require('./signature.schema'),
			description: 'Digital Signature - base64 encoded. XML DigSIg or a JWT.'
		}
	})
});
