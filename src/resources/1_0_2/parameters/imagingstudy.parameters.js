const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the imagingstudy query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-accession
	accession: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.accession',
		description: 'The accession identifier for the study',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-bodysite
	bodysite: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.bodySite',
		description: 'The body site studied',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-dicom-class
	dicom_class: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.instance.sopClass',
		description: 'The type of the instance',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-modality
	modality: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingStudy.series.modality',
		description: 'The modality of the series',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-order
	order: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.order',
		description: 'The order for the image',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingStudy.patient',
		description: 'Who the study is about',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-series
	series: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.uid',
		description: 'The identifier of the series of images',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-started
	started: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ImagingStudy.started',
		description: 'When the study was started',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-study
	study: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImagingStudy.uid',
		description: 'The study identifier for the image',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingStudy-uid
	uid: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImagingStudy.series.instance.uid',
		description: 'The instance unique identifier',
	},
};
