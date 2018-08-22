const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptTeardown Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptTeardown_Input',
	description: 'A series of operations required to clean up after the all the tests are executed (successfully or otherwise).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscriptteardownaction.input'))),
			description: 'The teardown action will only contain an operation.'
		}
	})
});
