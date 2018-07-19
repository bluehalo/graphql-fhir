const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingObjectSelectionStudySeriesInstanceFrames Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingObjectSelectionStudySeriesInstanceFrames',
	description: 'Identity and location information of the frames in the selected instance.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		frameNumbers: {
			type: new GraphQLList(new GraphQLNonNull(UnsignedIntScalar)),
			description: 'The frame numbers in the frame set.'
		},
		_frameNumbers: {
			type: require('./element.schema'),
			description: 'The frame numbers in the frame set.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'WADO-RS URL to retrieve the DICOM frames.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'WADO-RS URL to retrieve the DICOM frames.'
		}
	})
});
