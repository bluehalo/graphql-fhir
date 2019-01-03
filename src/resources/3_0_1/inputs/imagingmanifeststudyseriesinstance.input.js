const OidScalar = require('../scalars/oid.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ImagingManifest.study.series.instance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingManifestStudySeriesInstance_Input',
	description:
		'Identity and locating information of the selected DICOM SOP instances.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			sopClass: {
				type: new GraphQLNonNull(OidScalar),
				description: 'SOP class UID of the selected instance.',
			},
			_sopClass: {
				type: require('./element.input'),
				description: 'SOP class UID of the selected instance.',
			},
			uid: {
				type: new GraphQLNonNull(OidScalar),
				description: 'SOP Instance UID of the selected instance.',
			},
			_uid: {
				type: require('./element.input'),
				description: 'SOP Instance UID of the selected instance.',
			},
		}),
});
