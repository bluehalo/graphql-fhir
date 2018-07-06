const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

// Enums
let OperationOutcomeResourceType = new GraphQLEnumType({
	name: 'OperationOutcomeResourceTypeInput',
	values: {
		OperationOutcome: { value: 'OperationOutcome' }
	}
});

let OperationOutcomeSeverityType = new GraphQLEnumType({
	name: 'OperationOutcomeSeverityTypeInput',
	values: {
		fatal: { value: 'fatal' },
		error: { value: 'error' },
		warning: { value: 'warning' },
		information: { value: 'information' }
	}
});

// Backbone Elements
let OperationOutcomeIssueInput = new GraphQLInputObjectType({
	name: 'OperationOutcomeIssueInput',
	description: 'An error, warning or information message that results from a system action.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		severity: {
			type: new GraphQLNonNull(OperationOutcomeSeverityType),
			description: 'Indicates whether the issue indicates a variation from successful processing.'
		},
		_severity: {
			type: require('./element.input'),
			description: 'Extensions for severity.'
		},
		code: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Extensions for code.'
		},
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
			description: 'Extensions for diagnostics.'
		},
		location: {
			type: new GraphQLList(GraphQLString),
			description: 'For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be \"http.\" + the parameter name.'
		},
		_location: {
			type: require('./element.input'),
			description: 'Extensions for location.'
		},
		expression: {
			type: new GraphQLList(GraphQLString),
			description: 'A simple FHIRPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.'
		},
		_expression: {
			type: require('./element.input'),
			description: 'Extensions for expression.'
		}
	})
});


/**
 * @name exports
 * @summary Patient Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationOutcomeInput',
	description: 'Information about the success/failure of an action.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: OperationOutcomeResourceType,
			description: 'Type of this resource.'
		},
		issue: {
			type: new GraphQLNonNull(new GraphQLList(OperationOutcomeIssueInput)),
			description: 'Addresses for the individual.'
		}
	})
});
