const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestReportTestAction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportTestAction',
	description: 'Action would contain either an operation or an assertion.',
	fields: () => extendSchema(require('./backboneelement.schema'))
});
