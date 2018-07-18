const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the imagingmanifest query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'UID of the ImagingManifest (or a DICOM Key Object Selection which it represents). See http://hl7.org/fhir/SearchParameter/ImagingManifest-identifier.'
	},
	endpoint: {
		type: GraphQLString,
		description: 'The endpoint for the study or series. See http://hl7.org/fhir/SearchParameter/ImagingManifest-endpoint.'
	},
	authoring_time: {
		type: DateScalar,
		description: 'Time of the ImagingManifest (or a DICOM Key Object Selection which it represents) authoring. See http://hl7.org/fhir/SearchParameter/ImagingManifest-authoring-time.'
	},
	selected_study: {
		type: UriScalar,
		description: 'Study selected in the ImagingManifest (or a DICOM Key Object Selection which it represents). See http://hl7.org/fhir/SearchParameter/ImagingManifest-selected-study.'
	},
	author: {
		type: GraphQLString,
		description: 'Author of the ImagingManifest (or a DICOM Key Object Selection which it represents). See http://hl7.org/fhir/SearchParameter/ImagingManifest-author.'
	},
	patient: {
		type: GraphQLString,
		description: 'Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents). See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	imaging_study: {
		type: GraphQLString,
		description: 'ImagingStudy resource selected in the ImagingManifest (or a DICOM Key Object Selection which it represents). See http://hl7.org/fhir/SearchParameter/ImagingManifest-imaging-study.'
	}
};
