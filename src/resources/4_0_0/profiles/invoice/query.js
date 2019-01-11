// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const InvoiceSchema = require('../../schemas/invoice.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const InvoiceArgs = require('../../parameters/invoice.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, InvoiceArgs);

// Resolvers
const {
	getInvoice,
	getInvoiceList,
	getInvoiceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Invoice',
	action: 'read',
};

/**
 * @name exports.InvoiceQuery
 * @summary Invoice query.
 */
module.exports.InvoiceQuery = {
	description: 'Query for a single Invoice',
	resolve: scopeInvariant(scopeOptions, getInvoice),
	type: InvoiceSchema,
	args: args,
};

/**
 * @name exports.InvoiceListQuery
 * @summary Invoice query.
 */
module.exports.InvoiceListQuery = {
	description: 'Query for a more than or just one Invoice',
	resolve: scopeInvariant(scopeOptions, getInvoiceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.InvoiceInstanceQuery
 * @summary Invoice query.
 */
module.exports.InvoiceInstanceQuery = {
	description: 'Access information about a single Invoice',
	resolve: scopeInvariant(scopeOptions, getInvoiceInstance),
	type: InvoiceSchema,
	args: args,
};
