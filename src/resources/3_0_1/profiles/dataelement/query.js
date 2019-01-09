// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DataElementSchema = require('../../schemas/dataelement.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DataElementArgs = require('../../parameters/dataelement.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, DataElementArgs);

// Resolvers
const {
	getDataElement,
	getDataElementList,
	getDataElementInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DataElement',
	action: 'read',
};

/**
 * @name exports.DataElementQuery
 * @summary DataElement query.
 */
module.exports.DataElementQuery = {
	description: 'Query for a single DataElement',
	resolve: scopeInvariant(scopeOptions, getDataElement),
	type: DataElementSchema,
	args: args,
};

/**
 * @name exports.DataElementListQuery
 * @summary DataElement query.
 */
module.exports.DataElementListQuery = {
	description: 'Query for a more than or just one DataElement',
	resolve: scopeInvariant(scopeOptions, getDataElementList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DataElementInstanceQuery
 * @summary DataElement query.
 */
module.exports.DataElementInstanceQuery = {
	description: 'Access information about a single DataElement',
	resolve: scopeInvariant(scopeOptions, getDataElementInstance),
	type: DataElementSchema,
	args: args,
};
