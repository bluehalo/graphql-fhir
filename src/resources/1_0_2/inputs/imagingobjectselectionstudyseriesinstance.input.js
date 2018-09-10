const OidScalar = require('../scalars/oid.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingObjectSelection.study.series.instance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingObjectSelectionStudySeriesInstance_Input',
	description: 'Identity and locating information of the selected DICOM SOP instances.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sopClass: {
			type: new GraphQLNonNull(OidScalar),
			description: 'SOP class UID of the selected instance.'
		},
		_sopClass: {
			type: require('./element.input'),
			description: 'SOP class UID of the selected instance.'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'SOP Instance UID of the selected instance.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'SOP Instance UID of the selected instance.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'WADO-RS URL to retrieve the DICOM SOP Instance.'
		},
		_url: {
			type: require('./element.input'),
			description: 'WADO-RS URL to retrieve the DICOM SOP Instance.'
		},
		frames: {
			type: new GraphQLList(require('./imagingobjectselectionstudyseriesinstanceframes.input')),
			description: 'Identity and location information of the frames in the selected instance.'
		}
	})
});
