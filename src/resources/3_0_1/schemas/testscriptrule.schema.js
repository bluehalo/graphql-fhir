const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptRule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptRule',
	description: 'Assert rule to be used in one or more asserts within the test script.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		resource: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Reference to the resource (containing the contents of the rule needed for assertions).'
		},
		param: {
			type: new GraphQLList(require('./testscriptruleparam.schema')),
			description: 'Each rule template can take one or more parameters for rule evaluation.'
		}
	})
});
