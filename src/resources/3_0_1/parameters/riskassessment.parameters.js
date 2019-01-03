const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the riskassessment query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'When was assessment made? (See http://hl7.org/fhir/SearchParameter/clinical-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Unique identifier for the assessment (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	condition: {
		type: GraphQLString,
		description:
			'Condition assessed (See http://hl7.org/fhir/SearchParameter/RiskAssessment-condition).',
	},
	performer: {
		type: GraphQLString,
		description:
			'Who did assessment? (See http://hl7.org/fhir/SearchParameter/RiskAssessment-performer).',
	},
	method: {
		type: TokenScalar,
		description:
			'Evaluation mechanism (See http://hl7.org/fhir/SearchParameter/RiskAssessment-method).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who/what does assessment apply to? (See http://hl7.org/fhir/SearchParameter/RiskAssessment-subject).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who/what does assessment apply to? (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	probability: {
		type: GraphQLString,
		description:
			'Likelihood of specified outcome (See http://hl7.org/fhir/SearchParameter/RiskAssessment-probability).',
	},
	risk: {
		type: TokenScalar,
		description:
			'Likelihood of specified outcome as a qualitative value (See http://hl7.org/fhir/SearchParameter/RiskAssessment-risk).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Where was assessment performed? (See http://hl7.org/fhir/SearchParameter/clinical-encounter).',
	},
};
