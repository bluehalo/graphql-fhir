const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the imagingobjectselection query
 */
module.exports = {
	selected_study: {
		type: UriScalar,
		description: 'Study selected in key DICOM object selection (See http://hl7.org/fhir/SearchParameter/imagingobjectselection-selected-study).'
	},
	author: {
		type: GraphQLString,
		description: 'Author of key DICOM object selection (See http://hl7.org/fhir/SearchParameter/imagingobjectselection-author).'
	},
	title: {
		type: TokenScalar,
		description: 'Title of key DICOM object selection (See http://hl7.org/fhir/SearchParameter/imagingobjectselection-title).'
	},
	patient: {
		type: GraphQLString,
		description: 'Subject of key DICOM object selection (See http://hl7.org/fhir/SearchParameter/imagingobjectselection-patient).'
	},
	authoring_time: {
		type: DateScalar,
		description: 'Time of key DICOM object selection authoring (See http://hl7.org/fhir/SearchParameter/imagingobjectselection-authoring-time).'
	},
	identifier: {
		type: UriScalar,
		description: 'UID of key DICOM object selection (See http://hl7.org/fhir/SearchParameter/imagingobjectselection-identifier).'
	}
};
