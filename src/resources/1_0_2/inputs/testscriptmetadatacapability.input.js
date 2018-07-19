const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScriptMetadataCapability Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptMetadataCapability_Input',
	description: 'Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		required: {
			type: GraphQLBoolean,
			description: 'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.'
		},
		_required: {
			type: require('./element.input'),
			description: 'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.'
		},
		validated: {
			type: GraphQLBoolean,
			description: 'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.'
		},
		_validated: {
			type: require('./element.input'),
			description: 'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.'
		},
		description: {
			type: GraphQLString,
			description: 'Description of the capabilities that this test script is requiring the server to support.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Description of the capabilities that this test script is requiring the server to support.'
		},
		destination: {
			type: GraphQLInt,
			description: 'Which server these requirements apply to.'
		},
		_destination: {
			type: require('./element.input'),
			description: 'Which server these requirements apply to.'
		},
		link: {
			type: new GraphQLList(UriScalar),
			description: 'Links to the FHIR specification that describes this interaction and the resources involved in more detail.'
		},
		_link: {
			type: require('./element.input'),
			description: 'Links to the FHIR specification that describes this interaction and the resources involved in more detail.'
		},
		conformance: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Minimum conformance required of server for test script to execute successfully.   If server does not meet at a minimum the reference conformance definition, then all tests in this script are skipped.'
		}
	})
});
