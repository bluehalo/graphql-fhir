const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary CapabilityStatement.implementation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementImplementation',
	description:
		'Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			description: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'Information about the specific installation that this capability statement relates to.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'Information about the specific installation that this capability statement relates to.',
			},
			url: {
				type: UriScalar,
				description:
					'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.',
			},
			_url: {
				type: require('./element.schema'),
				description:
					'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.',
			},
		}),
});
