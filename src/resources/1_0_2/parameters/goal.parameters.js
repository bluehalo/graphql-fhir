const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the goal query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Goal-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Goal.category',
		description: 'E.g. Treatment, dietary, behavioral, etc.',
	},
	// http://hl7.org/fhir/SearchParameter/Goal-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Goal.identifier',
		description: 'External Ids for this goal',
	},
	// http://hl7.org/fhir/SearchParameter/Goal-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Goal.subject',
		description: 'Who this goal is intended for',
	},
	// http://hl7.org/fhir/SearchParameter/Goal-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Goal.status',
		description:
			'proposed | planned | accepted | rejected | in-progress | achieved | sustaining | on-hold | cancelled',
	},
	// http://hl7.org/fhir/SearchParameter/Goal-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Goal.subject',
		description: 'Who this goal is intended for',
	},
	// http://hl7.org/fhir/SearchParameter/Goal-targetdate
	targetdate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Goal.targetDate',
		description: 'Reach goal on or before',
	},
};
