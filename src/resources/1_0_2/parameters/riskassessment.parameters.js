const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the riskassessment query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'Who/what does assessment apply to? (See http://hl7.org/fhir/SearchParameter/riskassessment-patient).'
	},
	condition: {
		type: GraphQLString,
		description: 'Condition assessed (See http://hl7.org/fhir/SearchParameter/riskassessment-condition).'
	},
	subject: {
		type: GraphQLString,
		description: 'Who/what does assessment apply to? (See http://hl7.org/fhir/SearchParameter/riskassessment-subject).'
	},
	performer: {
		type: GraphQLString,
		description: 'Who did assessment? (See http://hl7.org/fhir/SearchParameter/riskassessment-performer).'
	},
	method: {
		type: TokenScalar,
		description: 'Evaluation mechanism (See http://hl7.org/fhir/SearchParameter/riskassessment-method).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Where was assessment performed? (See http://hl7.org/fhir/SearchParameter/riskassessment-encounter).'
	},
	date: {
		type: DateScalar,
		description: 'When was assessment made? (See http://hl7.org/fhir/SearchParameter/riskassessment-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier for the assessment (See http://hl7.org/fhir/SearchParameter/riskassessment-identifier).'
	}
};
