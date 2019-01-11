const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the adverseevent query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.category',
		description:
			'AE | PAE  An adverse event is an event that caused harm to a patient,  an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'AdverseEvent.date',
		description: 'When the event occurred',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.location',
		description: 'Location where adverse event occurred',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-reaction
	reaction: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.reaction',
		description: 'Adverse Reaction Events linked to exposure to substance',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder
	recorder: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.recorder',
		description: 'Who recorded the adverse event',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness
	seriousness: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.seriousness',
		description: 'Mild | Moderate | Severe',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-study
	study: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.study',
		description: 'AdverseEvent.study',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.subject',
		description: 'Subject or group impacted by event',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-substance
	substance: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.suspectEntity.instance',
		description: 'Refers to the specific entity that caused the adverse event',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.type',
		description: 'actual | potential',
	},
};
