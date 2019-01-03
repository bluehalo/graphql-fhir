const { GraphQLObjectType, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary TestScript.fixture Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptFixture',
	description: 'Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		autocreate: {
			type: GraphQLBoolean,
			description: 'Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.'
		},
		_autocreate: {
			type: require('./element.schema'),
			description: 'Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.'
		},
		autodelete: {
			type: GraphQLBoolean,
			description: 'Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.'
		},
		_autodelete: {
			type: require('./element.schema'),
			description: 'Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.'
		},
		resource: {
			type: require('./reference.schema'),
			description: 'Reference to the resource (containing the contents of the resource needed for operations).'
		}
	})
});
