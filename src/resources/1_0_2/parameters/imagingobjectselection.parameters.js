const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the imagingobjectselection query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingObjectSelection.author',
		description: 'Author of key DICOM object selection',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-authoring-time
	authoring_time: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ImagingObjectSelection.authoringTime',
		description: 'Time of key DICOM object selection authoring',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-identifier
	identifier: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImagingObjectSelection.uid',
		description: 'UID of key DICOM object selection',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImagingObjectSelection.patient',
		description: 'Subject of key DICOM object selection',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-selected-study
	selected_study: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ImagingObjectSelection.study.uid',
		description: 'Study selected in key DICOM object selection',
	},
	// http://hl7.org/fhir/SearchParameter/ImagingObjectSelection-title
	title: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImagingObjectSelection.title',
		description: 'Title of key DICOM object selection',
	},
};
