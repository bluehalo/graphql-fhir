const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the media query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'When Media was collected (See http://hl7.org/fhir/SearchParameter/Media-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Identifier(s) for the image (See http://hl7.org/fhir/SearchParameter/Media-identifier).',
	},
	created: {
		type: DateScalar,
		description:
			'Date attachment was first created (See http://hl7.org/fhir/SearchParameter/Media-created).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who/What this Media is a record of (See http://hl7.org/fhir/SearchParameter/Media-subject).',
	},
	type: {
		type: TokenScalar,
		description:
			'photo | video | audio (See http://hl7.org/fhir/SearchParameter/Media-type).',
	},
	operator: {
		type: GraphQLString,
		description:
			'The person who generated the image (See http://hl7.org/fhir/SearchParameter/Media-operator).',
	},
	view: {
		type: TokenScalar,
		description:
			'Imaging view, e.g. Lateral or Antero-posterior (See http://hl7.org/fhir/SearchParameter/Media-view).',
	},
	site: {
		type: TokenScalar,
		description:
			'Body part in media (See http://hl7.org/fhir/SearchParameter/Media-site).',
	},
	based_on: {
		type: GraphQLString,
		description:
			'Procedure that caused this media to be created (See http://hl7.org/fhir/SearchParameter/Media-based-on).',
	},
	subtype: {
		type: TokenScalar,
		description:
			'The type of acquisition equipment/process (See http://hl7.org/fhir/SearchParameter/Media-subtype).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who/What this Media is a record of (See http://hl7.org/fhir/SearchParameter/Media-patient).',
	},
	context: {
		type: GraphQLString,
		description:
			'Encounter / Episode associated with media (See http://hl7.org/fhir/SearchParameter/Media-context).',
	},
	device: {
		type: GraphQLString,
		description:
			'Observing Device (See http://hl7.org/fhir/SearchParameter/Media-device).',
	},
};
