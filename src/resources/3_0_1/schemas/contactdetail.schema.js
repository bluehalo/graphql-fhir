const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ContactDetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContactDetail',
	description: 'Base StructureDefinition for ContactDetail Type.',
	fields: () =>
		extendSchema(require('./element.schema'), {
			name: {
				type: GraphQLString,
				description: 'The name of an individual to contact.',
			},
			_name: {
				type: require('./element.schema'),
				description: 'The name of an individual to contact.',
			},
			telecom: {
				type: new GraphQLList(require('./contactpoint.schema')),
				description:
					'The contact details for the individual (if a name was provided) or the organization.',
			},
		}),
});
