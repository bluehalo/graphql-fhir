const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptTestAction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptTestAction',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.schema'))
});
