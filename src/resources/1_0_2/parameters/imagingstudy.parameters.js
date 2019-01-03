const UriScalar = require('../scalars/uri.scalar');
const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the imagingstudy query
 */
module.exports = {
	uid: {
		type: UriScalar,
		description:
			'The instance unique identifier (See http://hl7.org/fhir/SearchParameter/imagingstudy-uid).',
	},
	series: {
		type: UriScalar,
		description:
			'The identifier of the series of images (See http://hl7.org/fhir/SearchParameter/imagingstudy-series).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who the study is about (See http://hl7.org/fhir/SearchParameter/imagingstudy-patient).',
	},
	order: {
		type: GraphQLString,
		description:
			'The order for the image (See http://hl7.org/fhir/SearchParameter/imagingstudy-order).',
	},
	bodysite: {
		type: TokenScalar,
		description:
			'The body site studied (See http://hl7.org/fhir/SearchParameter/imagingstudy-bodysite).',
	},
	accession: {
		type: TokenScalar,
		description:
			'The accession identifier for the study (See http://hl7.org/fhir/SearchParameter/imagingstudy-accession).',
	},
	study: {
		type: UriScalar,
		description:
			'The study identifier for the image (See http://hl7.org/fhir/SearchParameter/imagingstudy-study).',
	},
	modality: {
		type: TokenScalar,
		description:
			'The modality of the series (See http://hl7.org/fhir/SearchParameter/imagingstudy-modality).',
	},
	started: {
		type: DateScalar,
		description:
			'When the study was started (See http://hl7.org/fhir/SearchParameter/imagingstudy-started).',
	},
	dicom_class: {
		type: UriScalar,
		description:
			'The type of the instance (See http://hl7.org/fhir/SearchParameter/imagingstudy-dicom-class).',
	},
};
