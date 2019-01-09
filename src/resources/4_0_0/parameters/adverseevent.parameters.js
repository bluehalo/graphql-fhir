const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the adverseevent query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-actuality
	actuality: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.actuality',
		description: 'actual | potential',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.category',
		description:
			'product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'AdverseEvent.date',
		description: 'When the event occurred',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-event
	event: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.event',
		description: 'Type of the event itself in relation to the subject',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.location',
		description: 'Location where adverse event occurred',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-recorder
	recorder: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.recorder',
		description: 'Who recorded the adverse event',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-resultingcondition
	resultingcondition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.resultingCondition',
		description: 'Effect on the subject due to this event',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-seriousness
	seriousness: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.seriousness',
		description: 'Seriousness of the event',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-severity
	severity: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AdverseEvent.severity',
		description: 'mild | moderate | severe',
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
		description: 'Subject impacted by event',
	},
	// http://hl7.org/fhir/SearchParameter/AdverseEvent-substance
	substance: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AdverseEvent.suspectEntity.instance',
		description: 'Refers to the specific entity that caused the adverse event',
	},
};
