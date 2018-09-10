const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the visionprescription query
 */
module.exports = {
	datewritten: {
		type: DateScalar,
		description: 'Return prescriptions written on this date (See http://hl7.org/fhir/SearchParameter/visionprescription-datewritten).'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to list dispenses for (See http://hl7.org/fhir/SearchParameter/visionprescription-patient).'
	},
	prescriber: {
		type: GraphQLString,
		description: 'Who authorizes the vision product (See http://hl7.org/fhir/SearchParameter/visionprescription-prescriber).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Return prescriptions with this encounter identifier (See http://hl7.org/fhir/SearchParameter/visionprescription-encounter).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Return prescriptions with this external identifier (See http://hl7.org/fhir/SearchParameter/visionprescription-identifier).'
	}
};
