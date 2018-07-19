const OidScalar = require('../scalars/oid.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingManifestStudy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingManifestStudy',
	description: 'Study identity and locating information of the DICOM SOP instances in the selection.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Study instance UID of the SOP instances in the selection.'
		},
		_uid: {
			type: require('./element.schema'),
			description: 'Study instance UID of the SOP instances in the selection.'
		},
		imagingStudy: {
			type: require('./reference.schema'),
			description: 'Reference to the Imaging Study in FHIR form.'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.'
		},
		series: {
			type: new GraphQLList(new GraphQLNonNull(require('./imagingmanifeststudyseries.schema'))),
			description: 'Series identity and locating information of the DICOM SOP instances in the selection.'
		}
	})
});
