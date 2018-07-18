const OidScalar = require('../scalars/oid.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImagingObjectSelectionStudySeriesInstance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingObjectSelectionStudySeriesInstance',
	description: 'Identity and locating information of the selected DICOM SOP instances.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sopClass: {
			type: new GraphQLNonNull(OidScalar),
			description: 'SOP class UID of the selected instance.'
		},
		_sopClass: {
			type: require('./element.schema'),
			description: 'SOP class UID of the selected instance.'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'SOP Instance UID of the selected instance.'
		},
		_uid: {
			type: require('./element.schema'),
			description: 'SOP Instance UID of the selected instance.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'WADO-RS URL to retrieve the DICOM SOP Instance.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'WADO-RS URL to retrieve the DICOM SOP Instance.'
		},
		frames: {
			type: new GraphQLList(require('./imagingobjectselectionstudyseriesinstanceframes.schema')),
			description: 'Identity and location information of the frames in the selected instance.'
		}
	})
});
