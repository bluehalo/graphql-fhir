const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestScriptTeardownAction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptTeardownAction_Input',
	description: 'The teardown action will only contain an operation.',
	fields: () => extendSchema(require('./backboneelement.input'))
});
