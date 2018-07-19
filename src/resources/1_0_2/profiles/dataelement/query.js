// Schemas
const DataElementSchema = require('../../schemas/dataelement.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DataElementArgs = require('../../parameters/dataelement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	dataelementResolver,
	dataelementListResolver,
	dataelementInstanceResolver
} = require('./resolver');

/**
 * @name exports.DataElementQuery
 * @summary DataElement Query.
 */
module.exports.DataElementQuery = {
	args: Object.assign({}, CommonArgs, DataElementArgs),
	description: 'Query for a single DataElement',
	resolve: dataelementResolver,
	type: DataElementSchema
};

/**
 * @name exports.DataElementListQuery
 * @summary DataElementList Query.
 */
module.exports.DataElementListQuery = {
	args: Object.assign({}, CommonArgs, DataElementArgs),
	description: 'Query for multiple DataElements',
	resolve: dataelementListResolver,
	type: BundleSchema
};

/**
 * @name exports.DataElementInstanceQuery
 * @summary DataElementInstance Query.
 */
module.exports.DataElementInstanceQuery = {
	description: 'Get information about a single DataElement',
	resolve: dataelementInstanceResolver,
	type: DataElementSchema
};
