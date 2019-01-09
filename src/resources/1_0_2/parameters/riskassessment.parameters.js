const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the riskassessment query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-condition
	condition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RiskAssessment.condition',
		description: 'Condition assessed',
	},
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'RiskAssessment.date',
		description: 'When was assessment made?',
	},
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RiskAssessment.encounter',
		description: 'Where was assessment performed?',
	},
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskAssessment.identifier',
		description: 'Unique identifier for the assessment',
	},
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-method
	method: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskAssessment.method',
		description: 'Evaluation mechanism',
	},
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RiskAssessment.subject',
		description: 'Who/what does assessment apply to?',
	},
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RiskAssessment.performer',
		description: 'Who did assessment?',
	},
	// http://hl7.org/fhir/SearchParameter/RiskAssessment-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RiskAssessment.subject',
		description: 'Who/what does assessment apply to?',
	},
};
