const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary GraphDefinition.link Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GraphDefinitionLink_Input',
	description: 'Links this graph makes rules about.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			path: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'Path in the resource that contains the link.',
			},
			_path: {
				type: require('./element.input'),
				description: 'Path in the resource that contains the link.',
			},
			sliceName: {
				type: GraphQLString,
				description: 'Which slice (if profiled).',
			},
			_sliceName: {
				type: require('./element.input'),
				description: 'Which slice (if profiled).',
			},
			min: {
				type: GraphQLInt,
				description: 'Minimum occurrences for this link.',
			},
			_min: {
				type: require('./element.input'),
				description: 'Minimum occurrences for this link.',
			},
			max: {
				type: GraphQLString,
				description: 'Maximum occurrences for this link.',
			},
			_max: {
				type: require('./element.input'),
				description: 'Maximum occurrences for this link.',
			},
			description: {
				type: GraphQLString,
				description:
					'Information about why this link is of interest in this graph definition.',
			},
			_description: {
				type: require('./element.input'),
				description:
					'Information about why this link is of interest in this graph definition.',
			},
			target: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./graphdefinitionlinktarget.input')),
				),
				description: 'Potential target for the link.',
			},
		}),
});
