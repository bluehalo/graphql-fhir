const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.test Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptTest_Input',
	description: 'A test in this script.',
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
			type: new GraphQLList(new GraphQLNonNull(require('./testscripttestaction.input'))),
			description: 'Action would contain either an operation or an assertion.'
		}
	})
});
