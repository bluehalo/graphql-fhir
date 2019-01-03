const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary OperationOutcome.issue Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationOutcomeIssue_Input',
	description: 'An error, warning or information message that results from a system action.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/issue-severity
		severity: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates whether the issue indicates a variation from successful processing.'
		},
		_severity: {
			type: require('./element.input'),
			description: 'Indicates whether the issue indicates a variation from successful processing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/issue-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/operation-outcome
		details: {
			type: require('./codeableconcept.input'),
			description: 'Additional details about the error. This may be a text description of the error, or a system code that identifies the error.'
		},
		diagnostics: {
			type: GraphQLString,
			description: 'Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.'
		},
		_diagnostics: {
			type: require('./element.input'),
			description: 'Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.'
		},
		location: {
			type: new GraphQLList(GraphQLString),
			description: 'A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.'
		},
		_location: {
			type: require('./element.input'),
			description: 'A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.'
		}
	})
});
