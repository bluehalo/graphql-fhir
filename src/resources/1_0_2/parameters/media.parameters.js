const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the media query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'Who/What this Media is a record of. See http://hl7.org/fhir/SearchParameter/media-patient.'
	},
	created: {
		type: DateScalar,
		description: 'Date attachment was first created. See http://hl7.org/fhir/SearchParameter/media-created.'
	},
	subject: {
		type: GraphQLString,
		description: 'Who/What this Media is a record of. See http://hl7.org/fhir/SearchParameter/media-subject.'
	},
	subtype: {
		type: TokenScalar,
		description: 'The type of acquisition equipment/process. See http://hl7.org/fhir/SearchParameter/media-subtype.'
	},
	view: {
		type: TokenScalar,
		description: 'Imaging view, e.g. Lateral or Antero-posterior. See http://hl7.org/fhir/SearchParameter/media-view.'
	},
	type: {
		type: TokenScalar,
		description: 'photo | video | audio. See http://hl7.org/fhir/SearchParameter/media-type.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifier(s) for the image. See http://hl7.org/fhir/SearchParameter/media-identifier.'
	},
	operator: {
		type: GraphQLString,
		description: 'The person who generated the image. See http://hl7.org/fhir/SearchParameter/media-operator.'
	}
};
