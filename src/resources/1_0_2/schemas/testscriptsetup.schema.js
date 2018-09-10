const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.setup Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetup',
	description: 'A series of required setup operations before tests are executed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscriptsetupaction.schema'))),
			description: 'Action would contain either an operation or an assertion.'
		}
	})
});
