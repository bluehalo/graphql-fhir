const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the immunization query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'Vaccination  (non)-Administration Date. See http://hl7.org/fhir/SearchParameter/clinical-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business identifier. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	reason: {
		type: TokenScalar,
		description: 'Why immunization occurred. See http://hl7.org/fhir/SearchParameter/Immunization-reason.'
	},
	reaction: {
		type: GraphQLString,
		description: 'Additional information on reaction. See http://hl7.org/fhir/SearchParameter/Immunization-reaction.'
	},
	lot_number: {
		type: GraphQLString,
		description: 'Vaccine Lot Number. See http://hl7.org/fhir/SearchParameter/Immunization-lot-number.'
	},
	practitioner: {
		type: GraphQLString,
		description: 'The practitioner who played a role in the vaccination. See http://hl7.org/fhir/SearchParameter/Immunization-practitioner.'
	},
	notgiven: {
		type: TokenScalar,
		description: 'Administrations which were not given. See http://hl7.org/fhir/SearchParameter/Immunization-notgiven.'
	},
	manufacturer: {
		type: GraphQLString,
		description: 'Vaccine Manufacturer. See http://hl7.org/fhir/SearchParameter/Immunization-manufacturer.'
	},
	dose_sequence: {
		type: GraphQLString,
		description: 'Dose number within series. See http://hl7.org/fhir/SearchParameter/Immunization-dose-sequence.'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient for the vaccination record. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	vaccine_code: {
		type: TokenScalar,
		description: 'Vaccine Product Administered. See http://hl7.org/fhir/SearchParameter/Immunization-vaccine-code.'
	},
	reason_not_given: {
		type: TokenScalar,
		description: 'Explanation of reason vaccination was not administered. See http://hl7.org/fhir/SearchParameter/Immunization-reason-not-given.'
	},
	location: {
		type: GraphQLString,
		description: 'The service delivery location or facility in which the vaccine was / was to be administered. See http://hl7.org/fhir/SearchParameter/Immunization-location.'
	},
	reaction_date: {
		type: DateScalar,
		description: 'When reaction started. See http://hl7.org/fhir/SearchParameter/Immunization-reaction-date.'
	},
	status: {
		type: TokenScalar,
		description: 'Immunization event status. See http://hl7.org/fhir/SearchParameter/Immunization-status.'
	}
};
