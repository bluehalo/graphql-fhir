const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptMetadataCapability Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptMetadataCapability',
	description: 'Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		required: {
			type: GraphQLBoolean,
			description: 'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.'
		},
		_required: {
			type: require('./element.schema'),
			description: 'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.'
		},
		validated: {
			type: GraphQLBoolean,
			description: 'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.'
		},
		_validated: {
			type: require('./element.schema'),
			description: 'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.'
		},
		description: {
			type: GraphQLString,
			description: 'Description of the capabilities that this test script is requiring the server to support.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Description of the capabilities that this test script is requiring the server to support.'
		},
		origin: {
			type: new GraphQLList(GraphQLInt),
			description: 'Which origin server these requirements apply to.'
		},
		_origin: {
			type: require('./element.schema'),
			description: 'Which origin server these requirements apply to.'
		},
		destination: {
			type: GraphQLInt,
			description: 'Which server these requirements apply to.'
		},
		_destination: {
			type: require('./element.schema'),
			description: 'Which server these requirements apply to.'
		},
		link: {
			type: new GraphQLList(UriScalar),
			description: 'Links to the FHIR specification that describes this interaction and the resources involved in more detail.'
		},
		_link: {
			type: require('./element.schema'),
			description: 'Links to the FHIR specification that describes this interaction and the resources involved in more detail.'
		},
		capabilities: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.'
		}
	})
});
