const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the media query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Media-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Media.basedOn',
		description: 'Procedure that caused this media to be created',
	},
	// http://hl7.org/fhir/SearchParameter/Media-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Media.createdDateTime',
		description: 'When Media was collected',
	},
	// http://hl7.org/fhir/SearchParameter/Media-device
	device: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Media.device',
		description: 'Observing Device',
	},
	// http://hl7.org/fhir/SearchParameter/Media-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Media.encounter',
		description: 'Encounter associated with media',
	},
	// http://hl7.org/fhir/SearchParameter/Media-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.identifier',
		description: 'Identifier(s) for the image',
	},
	// http://hl7.org/fhir/SearchParameter/Media-modality
	modality: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.modality',
		description: 'The type of acquisition equipment/process',
	},
	// http://hl7.org/fhir/SearchParameter/Media-operator
	operator: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Media.operator',
		description: 'The person who generated the image',
	},
	// http://hl7.org/fhir/SearchParameter/Media-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Media.subject',
		description: 'Who/What this Media is a record of',
	},
	// http://hl7.org/fhir/SearchParameter/Media-site
	site: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.bodySite',
		description: 'Observed body part',
	},
	// http://hl7.org/fhir/SearchParameter/Media-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.status',
		description:
			'preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown',
	},
	// http://hl7.org/fhir/SearchParameter/Media-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Media.subject',
		description: 'Who/What this Media is a record of',
	},
	// http://hl7.org/fhir/SearchParameter/Media-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.type',
		description: 'Classification of media as image, video, or audio',
	},
	// http://hl7.org/fhir/SearchParameter/Media-view
	view: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.view',
		description: 'Imaging view, e.g. Lateral or Antero-posterior',
	},
};
