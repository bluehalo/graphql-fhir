// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImagingObjectSelectionSchema = require('../../schemas/imagingobjectselection.schema');

// Inputs
const ImagingObjectSelectionInput = require('../../inputs/imagingobjectselection.input');


const {
	imagingobjectselectionCreateResolver,
	imagingobjectselectionUpdateResolver,
	imagingobjectselectionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ImagingObjectSelection record.'
	},
	resource: {
		type: ImagingObjectSelectionInput,
		description: 'ImagingObjectSelection Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ImagingObjectSelection record for deletion.'
	}
};

/**
 * @name exports.ImagingObjectSelectionCreateMutation
 * @summary ImagingObjectSelectionCreate Mutation.
 */
module.exports.ImagingObjectSelectionCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImagingObjectSelection',
	resolve: imagingobjectselectionCreateResolver,
	type: ImagingObjectSelectionSchema
};

/**
 * @name exports.ImagingObjectSelectionUpdateMutation
 * @summary ImagingObjectSelectionUpdate Mutation.
 */
module.exports.ImagingObjectSelectionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImagingObjectSelections',
	resolve: imagingobjectselectionUpdateResolver,
	type: ImagingObjectSelectionSchema
};

/**
 * @name exports.ImagingObjectSelectionDeleteMutation
 * @summary ImagingObjectSelectionDelete Mutation.
 */
module.exports.ImagingObjectSelectionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImagingObjectSelection',
	resolve: imagingobjectselectionDeleteResolver,
	type: ImagingObjectSelectionSchema
};
