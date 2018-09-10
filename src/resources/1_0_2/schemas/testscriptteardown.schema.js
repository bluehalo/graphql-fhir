const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.teardown Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptTeardown',
	description: 'A series of operations required to clean up after the all the tests are executed (successfully or otherwise).',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscriptteardownaction.schema'))),
			description: 'The teardown action will only contain an operation.'
		}
	})
});
