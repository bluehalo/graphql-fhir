const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptTestAction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptTestAction_Input',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.input'))
});
