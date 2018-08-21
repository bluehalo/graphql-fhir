const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the visionprescription query
 */
module.exports = {
	prescriber: {
		type: GraphQLString,
		description: 'Who authorizes the vision product. See http://hl7.org/fhir/SearchParameter/VisionPrescription-prescriber.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Return prescriptions with this external identifier. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to list dispenses for. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	datewritten: {
		type: DateScalar,
		description: 'Return prescriptions written on this date. See http://hl7.org/fhir/SearchParameter/VisionPrescription-datewritten.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Return prescriptions with this encounter identifier. See http://hl7.org/fhir/SearchParameter/clinical-encounter.'
	}
};
