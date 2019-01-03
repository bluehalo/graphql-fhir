// Schemas
const DataElementSchema = require('../../schemas/dataelement.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DataElementArgs = require('../../parameters/dataelement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	dataelementResolver,
	dataelementListResolver,
	dataelementInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DataElement',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.DataElementQuery
 * @summary DataElement Query.
 */
module.exports.DataElementQuery = {
	args: Object.assign({}, CommonArgs, DataElementArgs),
	description: 'Query for a single DataElement',
	resolve: scopeInvariant(scopeOptions, dataelementResolver),
	type: DataElementSchema,
};

/**
 * @name exports.DataElementListQuery
 * @summary DataElementList Query.
 */
module.exports.DataElementListQuery = {
	args: Object.assign({}, CommonArgs, DataElementArgs),
	description: 'Query for multiple DataElements',
	resolve: scopeInvariant(scopeOptions, dataelementListResolver),
	type: BundleSchema,
};

/**
 * @name exports.DataElementInstanceQuery
 * @summary DataElementInstance Query.
 */
module.exports.DataElementInstanceQuery = {
	description: 'Get information about a single DataElement',
	resolve: scopeInvariant(scopeOptions, dataelementInstanceResolver),
	type: DataElementSchema,
};
