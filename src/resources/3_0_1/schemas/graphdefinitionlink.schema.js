const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary GraphDefinition.link Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GraphDefinitionLink',
	description: 'Links this graph makes rules about.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Path in the resource that contains the link.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'Path in the resource that contains the link.'
		},
		sliceName: {
			type: GraphQLString,
			description: 'Which slice (if profiled).'
		},
		_sliceName: {
			type: require('./element.schema'),
			description: 'Which slice (if profiled).'
		},
		min: {
			type: GraphQLInt,
			description: 'Minimum occurrences for this link.'
		},
		_min: {
			type: require('./element.schema'),
			description: 'Minimum occurrences for this link.'
		},
		max: {
			type: GraphQLString,
			description: 'Maximum occurrences for this link.'
		},
		_max: {
			type: require('./element.schema'),
			description: 'Maximum occurrences for this link.'
		},
		description: {
			type: GraphQLString,
			description: 'Information about why this link is of interest in this graph definition.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Information about why this link is of interest in this graph definition.'
		},
		target: {
			type: new GraphQLList(new GraphQLNonNull(require('./graphdefinitionlinktarget.schema'))),
			description: 'Potential target for the link.'
		}
	})
});
