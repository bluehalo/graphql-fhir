// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SubstanceSpecificationSchema = require('../../schemas/substancespecification.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SubstanceSpecificationArgs = require('../../parameters/substancespecification.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	SubstanceSpecificationArgs,
);

// Resolvers
const {
	getSubstanceSpecification,
	getSubstanceSpecificationList,
	getSubstanceSpecificationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SubstanceSpecification',
	action: 'read',
};

/**
 * @name exports.SubstanceSpecificationQuery
 * @summary SubstanceSpecification query.
 */
module.exports.SubstanceSpecificationQuery = {
	description: 'Query for a single SubstanceSpecification',
	resolve: scopeInvariant(scopeOptions, getSubstanceSpecification),
	type: SubstanceSpecificationSchema,
	args: args,
};

/**
 * @name exports.SubstanceSpecificationListQuery
 * @summary SubstanceSpecification query.
 */
module.exports.SubstanceSpecificationListQuery = {
	description: 'Query for a more than or just one SubstanceSpecification',
	resolve: scopeInvariant(scopeOptions, getSubstanceSpecificationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SubstanceSpecificationInstanceQuery
 * @summary SubstanceSpecification query.
 */
module.exports.SubstanceSpecificationInstanceQuery = {
	description: 'Access information about a single SubstanceSpecification',
	resolve: scopeInvariant(scopeOptions, getSubstanceSpecificationInstance),
	type: SubstanceSpecificationSchema,
	args: args,
};
