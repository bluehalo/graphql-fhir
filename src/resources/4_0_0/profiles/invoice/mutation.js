// Schemas
const InvoiceSchema = require('../../schemas/invoice.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const InvoiceInput = require('../../inputs/invoice.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createInvoice, updateInvoice, removeInvoice } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Invoice',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Invoice record.',
	},
	resource: {
		type: new GraphQLNonNull(InvoiceInput),
		description: 'Invoice Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Invoice record for deletion.',
	},
};

/**
 * @name exports.InvoiceCreateMutation
 * @summary InvoiceCreate mutation.
 */
module.exports.InvoiceCreateMutation = {
	description: 'Create a Invoice record',
	resolve: scopeInvariant(scopeOptions, createInvoice),
	type: InvoiceSchema,
	args: WriteArgs,
};

/**
 * @name exports.InvoiceUpdateMutation
 * @summary InvoiceUpdate mutation.
 */
module.exports.InvoiceUpdateMutation = {
	description: 'Update a Invoice record',
	resolve: scopeInvariant(scopeOptions, updateInvoice),
	type: InvoiceSchema,
	args: WriteArgs,
};

/**
 * @name exports.InvoiceRemoveMutation
 * @summary InvoiceRemove mutation.
 */
module.exports.InvoiceRemoveMutation = {
	description: 'Remove a Invoice record',
	resolve: scopeInvariant(scopeOptions, removeInvoice),
	type: InvoiceSchema,
	args: DeleteArgs,
};
