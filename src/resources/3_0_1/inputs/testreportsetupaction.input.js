const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestReportSetupAction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportSetupAction_Input',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		operation: {
			type: require('./testreportsetupactionoperation.input'),
			description: 'The operation performed.'
		},
		assert: {
			type: require('./testreportsetupactionassert.input'),
			description: 'The results of the assertion performed on the previous operations.'
		}
	})
});
