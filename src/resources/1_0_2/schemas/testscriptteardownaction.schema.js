const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.teardown.action Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptTeardownAction',
	description: 'The teardown action will only contain an operation.',
	fields: () => extendSchema(require('./backboneelement.schema'))
});
