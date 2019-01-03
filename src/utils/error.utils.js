const { resolveFromVersion } = require('./resolve.utils');
const { mapJsonToSchema } = require('./schema.utils');
const { GraphQLError } = require('graphql');

// Generate an internal server error as an operation outcome
function internal(version, message) {
	let OperationOutcome = require(resolveFromVersion(
		version,
		'inputs/operationoutcome.input',
	));
	let { value } = mapJsonToSchema(
		{
			resourceType: 'OperationOutcome',
			issue: {
				code: 'exception',
				severity: 'error',
				diagnostics: message || '500: Internal server error',
			},
		},
		OperationOutcome,
	);
	return value;
}

// Generate an not found error as an operation outcome
function notFound(version, message) {
	let OperationOutcome = require(resolveFromVersion(
		version,
		'inputs/operationoutcome.input',
	));
	let { value } = mapJsonToSchema(
		{
			resourceType: 'OperationOutcome',
			issue: {
				code: 'not-found',
				severity: 'error',
				diagnostics: message || '404: Not Found',
			},
		},
		OperationOutcome,
	);
	return value;
}

// Generate an not found error as an operation outcome
function insufficientScope(version, message) {
	let OperationOutcome = require(resolveFromVersion(
		version,
		'inputs/operationoutcome.input',
	));
	let { value } = mapJsonToSchema(
		{
			resourceType: 'OperationOutcome',
			issue: {
				code: 'forbidden',
				severity: 'error',
				diagnostics: message || '403: Insufficient scope',
			},
		},
		OperationOutcome,
	);
	return value;
}

// Generate an error for GraphQL that puts an operation outcome in the extension field
// This should only be called with an operationOutcome, normal errors should first be
// converted to an operationOutcome before calling this
function formatErrorForGraphQL(operationOutcome) {
	// Get the diagnostics from the operation outcome. This should throw if
	// they are not available, they're required properties on operation outcome
	let diagnostics = operationOutcome.issue[0].diagnostics;
	return new GraphQLError(diagnostics, null, null, null, null, null, {
		resource: operationOutcome,
	});
}

module.exports = {
	formatErrorForGraphQL,
	insufficientScope,
	notFound,
	internal,
};
