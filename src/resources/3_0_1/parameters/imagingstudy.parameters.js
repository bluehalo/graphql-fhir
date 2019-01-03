const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the imagingstudy query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'Other identifiers for the Study (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	reason: {
		type: TokenScalar,
		description:
			'The reason for the study (See http://hl7.org/fhir/SearchParameter/ImagingStudy-reason).',
	},
	study: {
		type: UriScalar,
		description:
			'The study identifier for the image (See http://hl7.org/fhir/SearchParameter/ImagingStudy-study).',
	},
	dicom_class: {
		type: UriScalar,
		description:
			'The type of the instance (See http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class).',
	},
	modality: {
		type: TokenScalar,
		description:
			'The modality of the series (See http://hl7.org/fhir/SearchParameter/ImagingStudy-modality).',
	},
	bodysite: {
		type: TokenScalar,
		description:
			'The body site studied (See http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite).',
	},
	performer: {
		type: GraphQLString,
		description:
			'The person who performed the study (See http://hl7.org/fhir/SearchParameter/ImagingStudy-performer).',
	},
	started: {
		type: DateScalar,
		description:
			'When the study was started (See http://hl7.org/fhir/SearchParameter/ImagingStudy-started).',
	},
	accession: {
		type: TokenScalar,
		description:
			'The accession identifier for the study (See http://hl7.org/fhir/SearchParameter/ImagingStudy-accession).',
	},
	uid: {
		type: UriScalar,
		description:
			'The instance unique identifier (See http://hl7.org/fhir/SearchParameter/ImagingStudy-uid).',
	},
	endpoint: {
		type: GraphQLString,
		description:
			'The endpoint for te study or series (See http://hl7.org/fhir/SearchParameter/ImagingStudy-endpoint).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who the study is about (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	series: {
		type: UriScalar,
		description:
			'The identifier of the series of images (See http://hl7.org/fhir/SearchParameter/ImagingStudy-series).',
	},
	context: {
		type: GraphQLString,
		description:
			'The context of the study (See http://hl7.org/fhir/SearchParameter/ImagingStudy-context).',
	},
	basedon: {
		type: GraphQLString,
		description:
			'The order for the image (See http://hl7.org/fhir/SearchParameter/ImagingStudy-basedon).',
	},
};
