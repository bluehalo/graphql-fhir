// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const BodySiteSchema = require('../../schemas/bodysite.schema');

// Inputs
const BodySiteInput = require('../../inputs/bodysite.input');


const {
	bodysiteCreateResolver,
	bodysiteUpdateResolver,
	bodysiteDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a BodySite record.'
	},
	resource: {
		type: BodySiteInput,
		description: 'BodySite Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a BodySite record for deletion.'
	}
};

/**
 * @name exports.BodySiteCreateMutation
 * @summary BodySiteCreate Mutation.
 */
module.exports.BodySiteCreateMutation = {
	args: WriteArgs,
	description: 'Create a BodySite',
	resolve: bodysiteCreateResolver,
	type: BodySiteSchema
};

/**
 * @name exports.BodySiteUpdateMutation
 * @summary BodySiteUpdate Mutation.
 */
module.exports.BodySiteUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple BodySites',
	resolve: bodysiteUpdateResolver,
	type: BodySiteSchema
};

/**
 * @name exports.BodySiteDeleteMutation
 * @summary BodySiteDelete Mutation.
 */
module.exports.BodySiteDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single BodySite',
	resolve: bodysiteDeleteResolver,
	type: BodySiteSchema
};
