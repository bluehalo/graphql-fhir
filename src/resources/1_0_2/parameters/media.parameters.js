const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the media query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Media-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Media.content.creation',
		description: 'Date attachment was first created',
	},
	// http://hl7.org/fhir/SearchParameter/Media-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.identifier',
		description: 'Identifier(s) for the image',
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
	// http://hl7.org/fhir/SearchParameter/Media-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Media.subject',
		description: 'Who/What this Media is a record of',
	},
	// http://hl7.org/fhir/SearchParameter/Media-subtype
	subtype: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.subtype',
		description: 'The type of acquisition equipment/process',
	},
	// http://hl7.org/fhir/SearchParameter/Media-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.type',
		description: 'photo | video | audio',
	},
	// http://hl7.org/fhir/SearchParameter/Media-view
	view: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Media.view',
		description: 'Imaging view, e.g. Lateral or Antero-posterior',
	},
};
