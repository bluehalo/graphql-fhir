const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary HealthcareServiceNotAvailable Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HealthcareServiceNotAvailable_Input',
	description: 'The HealthcareService is not available during this period of time due to the provided reason.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The reason that can be presented to the user as to why this time is not available.'
		},
		_description: {
			type: require('./element.input'),
			description: 'The reason that can be presented to the user as to why this time is not available.'
		},
		during: {
			type: require('./period.input'),
			description: 'Service is not available (seasonally or for a public holiday) from this date.'
		}
	})
});
