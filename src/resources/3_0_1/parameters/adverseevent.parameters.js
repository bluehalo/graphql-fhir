const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the adverseevent query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'When the event occurred. See http://hl7.org/fhir/SearchParameter/AdverseEvent-date.'
	},
	recorder: {
		type: GraphQLString,
		description: 'Who recorded the adverse event. See http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder.'
	},
	study: {
		type: GraphQLString,
		description: 'AdverseEvent.study. See http://hl7.org/fhir/SearchParameter/AdverseEvent-study.'
	},
	reaction: {
		type: GraphQLString,
		description: 'Adverse Reaction Events linked to exposure to substance. See http://hl7.org/fhir/SearchParameter/AdverseEvent-reaction.'
	},
	seriousness: {
		type: TokenScalar,
		description: 'Mild | Moderate | Severe. See http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness.'
	},
	subject: {
		type: GraphQLString,
		description: 'Subject or group impacted by event. See http://hl7.org/fhir/SearchParameter/AdverseEvent-subject.'
	},
	substance: {
		type: GraphQLString,
		description: 'Refers to the specific entity that caused the adverse event. See http://hl7.org/fhir/SearchParameter/AdverseEvent-substance.'
	},
	location: {
		type: GraphQLString,
		description: 'Location where adverse event occurred. See http://hl7.org/fhir/SearchParameter/AdverseEvent-location.'
	},
	category: {
		type: TokenScalar,
		description: 'AE | PAE  An adverse event is an event that caused harm to a patient,  an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not. See http://hl7.org/fhir/SearchParameter/AdverseEvent-category.'
	},
	type: {
		type: TokenScalar,
		description: 'actual | potential. See http://hl7.org/fhir/SearchParameter/AdverseEvent-type.'
	}
};
