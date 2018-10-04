const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.test.action Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptTestAction_Input',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.input'))
});
