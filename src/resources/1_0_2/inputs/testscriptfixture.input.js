const { GraphQLInputObjectType, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestScript.fixture Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptFixture_Input',
	description:
		'Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			autocreate: {
				type: GraphQLBoolean,
				description:
					'Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.',
			},
			_autocreate: {
				type: require('./element.input'),
				description:
					'Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.',
			},
			autodelete: {
				type: GraphQLBoolean,
				description:
					'Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.',
			},
			_autodelete: {
				type: require('./element.input'),
				description:
					'Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.',
			},
			resource: {
				type: require('./reference.input'),
				description:
					'Reference to the resource (containing the contents of the resource needed for operations).',
			},
		}),
});
