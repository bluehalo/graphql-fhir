const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.rule Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptRule_Input',
	description: 'Assert rule to be used in one or more asserts within the test script.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		resource: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Reference to the resource (containing the contents of the rule needed for assertions).'
		},
		param: {
			type: new GraphQLList(require('./testscriptruleparam.input')),
			description: 'Each rule template can take one or more parameters for rule evaluation.'
		}
	})
});
