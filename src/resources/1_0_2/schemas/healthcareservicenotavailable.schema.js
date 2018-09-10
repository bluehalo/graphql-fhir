const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary HealthcareService.notAvailable Schema
 */
module.exports = new GraphQLObjectType({
	name: 'HealthcareServiceNotAvailable',
	description: 'The HealthcareService is not available during this period of time due to the provided reason.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The reason that can be presented to the user as to why this time is not available.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'The reason that can be presented to the user as to why this time is not available.'
		},
		during: {
			type: require('./period.schema'),
			description: 'Service is not available (seasonally or for a public holiday) from this date.'
		}
	})
});
