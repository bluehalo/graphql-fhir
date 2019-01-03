const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary TestReport.participant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestReportParticipant',
	description:
		'A participant in the test execution, either the execution engine, a client, or a server.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/report-participant-type
			type: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'The type of participant.',
			},
			_type: {
				type: require('./element.schema'),
				description: 'The type of participant.',
			},
			uri: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'The uri of the participant. An absolute URL is preferred.',
			},
			_uri: {
				type: require('./element.schema'),
				description:
					'The uri of the participant. An absolute URL is preferred.',
			},
			display: {
				type: GraphQLString,
				description: 'The display name of the participant.',
			},
			_display: {
				type: require('./element.schema'),
				description: 'The display name of the participant.',
			},
		}),
});
