const OidScalar = require('../scalars/oid.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingManifest.study.series Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingManifestStudySeries_Input',
	description: 'Series identity and locating information of the DICOM SOP instances in the selection.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Series instance UID of the SOP instances in the selection.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Series instance UID of the SOP instances in the selection.'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.'
		},
		instance: {
			type: new GraphQLList(new GraphQLNonNull(require('./imagingmanifeststudyseriesinstance.input'))),
			description: 'Identity and locating information of the selected DICOM SOP instances.'
		}
	})
});
