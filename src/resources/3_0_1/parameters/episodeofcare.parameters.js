const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the episodeofcare query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The provided date search value falls within the episode of care\'s period (See http://hl7.org/fhir/SearchParameter/clinical-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business Identifier(s) relevant for this EpisodeOfCare (See http://hl7.org/fhir/SearchParameter/clinical-identifier).'
	},
	condition: {
		type: GraphQLString,
		description: 'Conditions/problems/diagnoses this episode of care is for (See http://hl7.org/fhir/SearchParameter/EpisodeOfCare-condition).'
	},
	incomingreferral: {
		type: GraphQLString,
		description: 'Incoming Referral Request (See http://hl7.org/fhir/SearchParameter/EpisodeOfCare-incomingreferral).'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient who is the focus of this episode of care (See http://hl7.org/fhir/SearchParameter/clinical-patient).'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization that has assumed the specific responsibilities of this EpisodeOfCare (See http://hl7.org/fhir/SearchParameter/EpisodeOfCare-organization).'
	},
	type: {
		type: TokenScalar,
		description: 'Type/class  - e.g. specialist referral, disease management (See http://hl7.org/fhir/SearchParameter/clinical-type).'
	},
	care_manager: {
		type: GraphQLString,
		description: 'Care manager/care co-ordinator for the patient (See http://hl7.org/fhir/SearchParameter/EpisodeOfCare-care-manager).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the Episode of Care as provided (does not check the status history collection) (See http://hl7.org/fhir/SearchParameter/EpisodeOfCare-status).'
	}
};
