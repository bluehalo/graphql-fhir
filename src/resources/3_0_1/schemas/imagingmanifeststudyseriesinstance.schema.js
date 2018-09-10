const OidScalar = require('../scalars/oid.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingManifest.study.series.instance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingManifestStudySeriesInstance',
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
		}
	})
});
