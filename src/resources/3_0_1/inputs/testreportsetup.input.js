const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestReportSetup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportSetup_Input',
	description: 'The results of the series of required setup operations before the tests were executed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testreportsetupaction.input'))),
			description: 'Action would contain either an operation or an assertion.'
		}
	})
});
