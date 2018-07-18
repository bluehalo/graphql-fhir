const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestReportTeardown Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportTeardown_Input',
	description: 'The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testreportteardownaction.input'))),
			description: 'The teardown action will only contain an operation.'
		}
	})
});
