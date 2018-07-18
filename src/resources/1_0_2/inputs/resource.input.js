const IdScalar = require('../scalars/id.scalar');
const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Resource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Resource_Input',
	description: 'Base StructureDefinition for Resource Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		id: {
			type: IdScalar,
			description: 'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.'
		},
		_id: {
			type: require('./element.input'),
			description: 'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.'
		},
		meta: {
			type: require('./meta.input'),
			description: 'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.'
		},
		implicitRules: {
			type: UriScalar,
			description: 'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.'
		},
		_implicitRules: {
			type: require('./element.input'),
			description: 'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.'
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.'
		},
		_language: {
			type: require('./element.input'),
			description: 'The base language in which the resource is written.'
		}
	})
});
