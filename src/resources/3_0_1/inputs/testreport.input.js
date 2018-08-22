const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let TestReportResourceInputType = new GraphQLEnumType({
	name: 'TestReportResourceInputType',
	values: {
		TestReport: { value: 'TestReport' }
	}
});

/**
 * @name exports
 * @summary TestReport Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReport_Input',
	description: 'Base StructureDefinition for TestReport Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(TestReportResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifier for the TestScript assigned for external purposes outside the context of FHIR.'
		},
		name: {
			type: GraphQLString,
			description: 'A free text natural language name identifying the executed TestScript.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A free text natural language name identifying the executed TestScript.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/report-status-codes
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of this test report.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The current state of this test report.'
		},
		testScript: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/report-result-codes
		result: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The overall result from the execution of the TestScript.'
		},
		_result: {
			type: require('./element.input'),
			description: 'The overall result from the execution of the TestScript.'
		},
		score: {
			type: GraphQLFloat,
			description: 'The final score (percentage of tests passed) resulting from the execution of the TestScript.'
		},
		_score: {
			type: require('./element.input'),
			description: 'The final score (percentage of tests passed) resulting from the execution of the TestScript.'
		},
		tester: {
			type: GraphQLString,
			description: 'Name of the tester producing this report (Organization or individual).'
		},
		_tester: {
			type: require('./element.input'),
			description: 'Name of the tester producing this report (Organization or individual).'
		},
		issued: {
			type: DateTimeScalar,
			description: 'When the TestScript was executed and this TestReport was generated.'
		},
		_issued: {
			type: require('./element.input'),
			description: 'When the TestScript was executed and this TestReport was generated.'
		},
		participant: {
			type: new GraphQLList(require('./testreportparticipant.input')),
			description: 'A participant in the test execution, either the execution engine, a client, or a server.'
		},
		setup: {
			type: require('./testreportsetup.input'),
			description: 'The results of the series of required setup operations before the tests were executed.'
		},
		test: {
			type: new GraphQLList(require('./testreporttest.input')),
			description: 'A test executed from the test script.'
		},
		teardown: {
			type: require('./testreportteardown.input'),
			description: 'The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise).'
		}
	})
});
