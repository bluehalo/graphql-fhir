const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the immunization query
 */
module.exports = {
	reaction: {
		type: GraphQLString,
		description:
			'Additional information on reaction (See http://hl7.org/fhir/SearchParameter/immunization-reaction).',
	},
	requester: {
		type: GraphQLString,
		description:
			'The practitioner who ordered the vaccination (See http://hl7.org/fhir/SearchParameter/immunization-requester).',
	},
	dose_sequence: {
		type: GraphQLString,
		description:
			'Dose number within series (See http://hl7.org/fhir/SearchParameter/immunization-dose-sequence).',
	},
	status: {
		type: TokenScalar,
		description:
			'Immunization event status (See http://hl7.org/fhir/SearchParameter/immunization-status).',
	},
	location: {
		type: GraphQLString,
		description:
			'The service delivery location or facility in which the vaccine was / was to be administered (See http://hl7.org/fhir/SearchParameter/immunization-location).',
	},
	reason: {
		type: TokenScalar,
		description:
			'Why immunization occurred (See http://hl7.org/fhir/SearchParameter/immunization-reason).',
	},
	reaction_date: {
		type: DateScalar,
		description:
			'When reaction started (See http://hl7.org/fhir/SearchParameter/immunization-reaction-date).',
	},
	notgiven: {
		type: TokenScalar,
		description:
			'Administrations which were not given (See http://hl7.org/fhir/SearchParameter/immunization-notgiven).',
	},
	date: {
		type: DateScalar,
		description:
			'Vaccination  (non)-Administration Date (See http://hl7.org/fhir/SearchParameter/immunization-date).',
	},
	reason_not_given: {
		type: TokenScalar,
		description:
			'Explanation of reason vaccination was not administered (See http://hl7.org/fhir/SearchParameter/immunization-reason-not-given).',
	},
	vaccine_code: {
		type: TokenScalar,
		description:
			'Vaccine Product Administered (See http://hl7.org/fhir/SearchParameter/immunization-vaccine-code).',
	},
	patient: {
		type: GraphQLString,
		description:
			'The patient for the vaccination record (See http://hl7.org/fhir/SearchParameter/immunization-patient).',
	},
	lot_number: {
		type: GraphQLString,
		description:
			'Vaccine Lot Number (See http://hl7.org/fhir/SearchParameter/immunization-lot-number).',
	},
	manufacturer: {
		type: GraphQLString,
		description:
			'Vaccine Manufacturer (See http://hl7.org/fhir/SearchParameter/immunization-manufacturer).',
	},
	performer: {
		type: GraphQLString,
		description:
			'The practitioner who administered the vaccination (See http://hl7.org/fhir/SearchParameter/immunization-performer).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Business identifier (See http://hl7.org/fhir/SearchParameter/immunization-identifier).',
	},
};
