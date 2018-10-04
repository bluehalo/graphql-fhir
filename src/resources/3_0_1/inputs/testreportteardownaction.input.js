const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestReport.teardown.action Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportTeardownAction_Input',
	description: 'The teardown action will only contain an operation.',
	fields: () => extendSchema(require('./backboneelement.input'))
});
