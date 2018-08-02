const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestReportSetupAction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportSetupAction',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		operation: {
			type: require('./testreportsetupactionoperation.schema'),
			description: 'The operation performed.'
		},
		assert: {
			type: require('./testreportsetupactionassert.schema'),
			description: 'The results of the assertion performed on the previous operations.'
		}
	})
});
