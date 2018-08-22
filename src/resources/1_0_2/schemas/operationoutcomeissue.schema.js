const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary OperationOutcomeIssue Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationOutcomeIssue',
	description: 'An error, warning or information message that results from a system action.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/issue-severity
		severity: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates whether the issue indicates a variation from successful processing.'
		},
		_severity: {
			type: require('./element.schema'),
			description: 'Indicates whether the issue indicates a variation from successful processing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/issue-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/operation-outcome
		details: {
			type: require('./codeableconcept.schema'),
			description: 'Additional details about the error. This may be a text description of the error, or a system code that identifies the error.'
		},
		diagnostics: {
			type: GraphQLString,
			description: 'Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.'
		},
		_diagnostics: {
			type: require('./element.schema'),
			description: 'Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.'
		},
		location: {
			type: new GraphQLList(GraphQLString),
			description: 'A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.'
		},
		_location: {
			type: require('./element.schema'),
			description: 'A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.'
		}
	})
});
