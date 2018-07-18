const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ConceptMapGroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapGroup_Input',
	description: 'A group of mappings that all have the same source and target system.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		source: {
			type: UriScalar,
			description: 'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).'
		},
		_source: {
			type: require('./element.input'),
			description: 'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).'
		},
		sourceVersion: {
			type: GraphQLString,
			description: 'The specific version of the code system, as determined by the code system authority.'
		},
		_sourceVersion: {
			type: require('./element.input'),
			description: 'The specific version of the code system, as determined by the code system authority.'
		},
		target: {
			type: UriScalar,
			description: 'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).'
		},
		_target: {
			type: require('./element.input'),
			description: 'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).'
		},
		targetVersion: {
			type: GraphQLString,
			description: 'The specific version of the code system, as determined by the code system authority.'
		},
		_targetVersion: {
			type: require('./element.input'),
			description: 'The specific version of the code system, as determined by the code system authority.'
		},
		element: {
			type: new GraphQLList(new GraphQLNonNull(require('./conceptmapgroupelement.input'))),
			description: 'Mappings for an individual concept in the source to one or more concepts in the target.'
		},
		unmapped: {
			type: require('./conceptmapgroupunmapped.input'),
			description: 'What to do when there is no match in the mappings in the group.'
		}
	})
});
