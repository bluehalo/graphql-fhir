const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationadministration query
 */
module.exports = {
	medication: {
		type: GraphQLString,
		description:
			'Return administrations of this medication resource (See http://hl7.org/fhir/SearchParameter/medicationadministration-medication).',
	},
	effectivetime: {
		type: DateScalar,
		description:
			'Date administration happened (or did not happen) (See http://hl7.org/fhir/SearchParameter/medicationadministration-effectivetime).',
	},
	patient: {
		type: GraphQLString,
		description:
			'The identity of a patient to list administrations  for (See http://hl7.org/fhir/SearchParameter/medicationadministration-patient).',
	},
	practitioner: {
		type: GraphQLString,
		description:
			'Who administered substance (See http://hl7.org/fhir/SearchParameter/medicationadministration-practitioner).',
	},
	status: {
		type: TokenScalar,
		description:
			'MedicationAdministration event status (for example one of active/paused/completed/nullified) (See http://hl7.org/fhir/SearchParameter/medicationadministration-status).',
	},
	prescription: {
		type: GraphQLString,
		description:
			'The identity of a prescription to list administrations from (See http://hl7.org/fhir/SearchParameter/medicationadministration-prescription).',
	},
	device: {
		type: GraphQLString,
		description:
			'Return administrations with this administration device identity (See http://hl7.org/fhir/SearchParameter/medicationadministration-device).',
	},
	notgiven: {
		type: TokenScalar,
		description:
			'Administrations that were not made (See http://hl7.org/fhir/SearchParameter/medicationadministration-notgiven).',
	},
	code: {
		type: TokenScalar,
		description:
			'Return administrations of this medication code (See http://hl7.org/fhir/SearchParameter/medicationadministration-code).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Return administrations that share this encounter (See http://hl7.org/fhir/SearchParameter/medicationadministration-encounter).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Return administrations with this external identifier (See http://hl7.org/fhir/SearchParameter/medicationadministration-identifier).',
	},
};
