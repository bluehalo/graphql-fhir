const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestReport.test Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportTest_Input',
	description: 'A test executed from the test script.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: GraphQLString,
			description: 'The name of this test used for tracking/logging purposes by test engines.'
		},
		_name: {
			type: require('./element.input'),
			description: 'The name of this test used for tracking/logging purposes by test engines.'
		},
		description: {
			type: GraphQLString,
			description: 'A short description of the test used by test engines for tracking and reporting purposes.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A short description of the test used by test engines for tracking and reporting purposes.'
		},
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testreporttestaction.input'))),
			description: 'Action would contain either an operation or an assertion.'
		}
	})
});
