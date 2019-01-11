const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the episodeofcare query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-care-manager
	care_manager: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.careManager',
		description: 'Care manager/care co-ordinator for the patient',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-condition
	condition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.condition',
		description: 'Conditions/problems/diagnoses this episode of care is for',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EpisodeOfCare.period',
		description:
			"The provided date search value falls within the episode of care's period",
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EpisodeOfCare.identifier',
		description: 'Identifier(s) for the EpisodeOfCare',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-incomingreferral
	incomingreferral: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.referralRequest',
		description: 'Incoming Referral Request',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.managingOrganization',
		description:
			'The organization that has assumed the specific responsibilities of this EpisodeOfCare',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.patient',
		description: 'Patient for this episode of care',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EpisodeOfCare.status',
		description:
			'The current status of the Episode of Care as provided (does not check the status history collection)',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-team-member
	team_member: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EpisodeOfCare.careTeam.member',
		description:
			'A Practitioner or Organization allocated to the care team for this EpisodeOfCare',
	},
	// http://hl7.org/fhir/SearchParameter/EpisodeOfCare-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EpisodeOfCare.type',
		description: 'Type/class  - e.g. specialist referral, disease management',
	},
};
