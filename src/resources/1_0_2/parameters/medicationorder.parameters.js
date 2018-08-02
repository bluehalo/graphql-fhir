const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationorder query
 */
module.exports = {
	medication: {
		type: GraphQLString,
		description: 'Return administrations of this medication reference. See http://hl7.org/fhir/SearchParameter/medicationorder-medication.'
	},
	datewritten: {
		type: DateScalar,
		description: 'Return prescriptions written on this date. See http://hl7.org/fhir/SearchParameter/medicationorder-datewritten.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to list orders  for. See http://hl7.org/fhir/SearchParameter/medicationorder-patient.'
	},
	status: {
		type: TokenScalar,
		description: 'Status of the prescription. See http://hl7.org/fhir/SearchParameter/medicationorder-status.'
	},
	prescriber: {
		type: GraphQLString,
		description: 'Who ordered the medication(s). See http://hl7.org/fhir/SearchParameter/medicationorder-prescriber.'
	},
	code: {
		type: TokenScalar,
		description: 'Return administrations of this medication code. See http://hl7.org/fhir/SearchParameter/medicationorder-code.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Return prescriptions with this encounter identifier. See http://hl7.org/fhir/SearchParameter/medicationorder-encounter.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Return prescriptions with this external identifier. See http://hl7.org/fhir/SearchParameter/medicationorder-identifier.'
	}
};
