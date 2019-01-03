const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary PractitionerRole.notAvailable Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PractitionerRoleNotAvailable',
	description:
		'The HealthcareService is not available during this period of time due to the provided reason.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			description: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'The reason that can be presented to the user as to why this time is not available.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'The reason that can be presented to the user as to why this time is not available.',
			},
			during: {
				type: require('./period.schema'),
				description:
					'Service is not available (seasonally or for a public holiday) from this date.',
			},
		}),
});
