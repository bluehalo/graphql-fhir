const OidScalar = require('../scalars/oid.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingManifestStudySeries Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingManifestStudySeries',
	description: 'Series identity and locating information of the DICOM SOP instances in the selection.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Series instance UID of the SOP instances in the selection.'
		},
		_uid: {
			type: require('./element.schema'),
			description: 'Series instance UID of the SOP instances in the selection.'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.'
		},
		instance: {
			type: new GraphQLList(new GraphQLNonNull(require('./imagingmanifeststudyseriesinstance.schema'))),
			description: 'Identity and locating information of the selected DICOM SOP instances.'
		}
	})
});
