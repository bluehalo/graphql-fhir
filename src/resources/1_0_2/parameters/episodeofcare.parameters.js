const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the episodeofcare query
 */
module.exports = {
	organization: {
		type: GraphQLString,
		description: 'The organization that has assumed the specific responsibilities of this EpisodeOfCare. See http://hl7.org/fhir/SearchParameter/episodeofcare-organization.'
	},
	patient: {
		type: GraphQLString,
		description: 'Patient for this episode of care. See http://hl7.org/fhir/SearchParameter/episodeofcare-patient.'
	},
	condition: {
		type: GraphQLString,
		description: 'Conditions/problems/diagnoses this episode of care is for. See http://hl7.org/fhir/SearchParameter/episodeofcare-condition.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the Episode of Care as provided (does not check the status history collection). See http://hl7.org/fhir/SearchParameter/episodeofcare-status.'
	},
	care_manager: {
		type: GraphQLString,
		description: 'Care manager/care co-ordinator for the patient. See http://hl7.org/fhir/SearchParameter/episodeofcare-care-manager.'
	},
	type: {
		type: TokenScalar,
		description: 'Type/class  - e.g. specialist referral, disease management. See http://hl7.org/fhir/SearchParameter/episodeofcare-type.'
	},
	date: {
		type: DateScalar,
		description: 'The provided date search value falls within the episode of care\'s period. See http://hl7.org/fhir/SearchParameter/episodeofcare-date.'
	},
	incomingreferral: {
		type: GraphQLString,
		description: 'Incoming Referral Request. See http://hl7.org/fhir/SearchParameter/episodeofcare-incomingreferral.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifier(s) for the EpisodeOfCare. See http://hl7.org/fhir/SearchParameter/episodeofcare-identifier.'
	},
	team_member: {
		type: GraphQLString,
		description: 'A Practitioner or Organization allocated to the care team for this EpisodeOfCare. See http://hl7.org/fhir/SearchParameter/episodeofcare-team-member.'
	}
};
