const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

// Scalars
const CodeScalar = require('../scalars/code.scalar');
const IdScalar = require('../scalars/id.scalar');

/**
 * @name exports
 * @summary Resource Fields
 */
let Resource = new GraphQLObjectType({
	name: 'Resource',
	description: 'This is the base resource type for everything.',
	fields: () => ({
		id: {
			type: IdScalar,
			description: 'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.'
		},
		meta: {
			type: require('./meta.schema'),
			description: 'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.'
		},
		implicitRules: {
			type: GraphQLString,
			description: 'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.'
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.'
		}
	})
});

module.exports = Resource;
