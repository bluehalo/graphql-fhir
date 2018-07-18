const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestReportTeardown Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportTeardown',
	description: 'The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testreportteardownaction.schema'))),
			description: 'The teardown action will only contain an operation.'
		}
	})
});
