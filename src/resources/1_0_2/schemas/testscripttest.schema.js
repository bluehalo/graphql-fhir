const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.test Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptTest',
	description: 'A test in this script.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: GraphQLString,
			description: 'The name of this test used for tracking/logging purposes by test engines.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of this test used for tracking/logging purposes by test engines.'
		},
		description: {
			type: GraphQLString,
			description: 'A short description of the test used by test engines for tracking and reporting purposes.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A short description of the test used by test engines for tracking and reporting purposes.'
		},
		action: {
			type: new GraphQLList(new GraphQLNonNull(require('./testscripttestaction.schema'))),
			description: 'Action would contain either an operation or an assertion.'
		}
	})
});
