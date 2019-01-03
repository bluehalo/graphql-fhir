const OidScalar = require('../scalars/oid.scalar');
const UriScalar = require('../scalars/uri.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ImagingObjectSelection.study Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingObjectSelectionStudy_Input',
	description:
		'Study identity and locating information of the DICOM SOP instances in the selection.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			uid: {
				type: new GraphQLNonNull(OidScalar),
				description:
					'Study instance UID of the SOP instances in the selection.',
			},
			_uid: {
				type: require('./element.input'),
				description:
					'Study instance UID of the SOP instances in the selection.',
			},
			url: {
				type: UriScalar,
				description:
					'WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.',
			},
			_url: {
				type: require('./element.input'),
				description:
					'WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.',
			},
			imagingStudy: {
				type: require('./reference.input'),
				description: 'Reference to the Imaging Study in FHIR form.',
			},
			series: {
				type: new GraphQLList(
					new GraphQLNonNull(
						require('./imagingobjectselectionstudyseries.input'),
					),
				),
				description:
					'Series identity and locating information of the DICOM SOP instances in the selection.',
			},
		}),
});
