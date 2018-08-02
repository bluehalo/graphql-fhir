const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the goal query
 */
module.exports = {
	targetdate: {
		type: DateScalar,
		description: 'Reach goal on or before. See http://hl7.org/fhir/SearchParameter/goal-targetdate.'
	},
	category: {
		type: TokenScalar,
		description: 'E.g. Treatment, dietary, behavioral, etc. See http://hl7.org/fhir/SearchParameter/goal-category.'
	},
	patient: {
		type: GraphQLString,
		description: 'Who this goal is intended for. See http://hl7.org/fhir/SearchParameter/goal-patient.'
	},
	status: {
		type: TokenScalar,
		description: 'proposed | planned | accepted | rejected | in-progress | achieved | sustaining | on-hold | cancelled. See http://hl7.org/fhir/SearchParameter/goal-status.'
	},
	subject: {
		type: GraphQLString,
		description: 'Who this goal is intended for. See http://hl7.org/fhir/SearchParameter/goal-subject.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External Ids for this goal. See http://hl7.org/fhir/SearchParameter/goal-identifier.'
	}
};
