const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the goal query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'External Ids for this goal (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who this goal is intended for (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who this goal is intended for (See http://hl7.org/fhir/SearchParameter/Goal-subject).',
	},
	start_date: {
		type: DateScalar,
		description:
			'When goal pursuit begins (See http://hl7.org/fhir/SearchParameter/Goal-start-date).',
	},
	category: {
		type: TokenScalar,
		description:
			'E.g. Treatment, dietary, behavioral, etc. (See http://hl7.org/fhir/SearchParameter/Goal-category).',
	},
	target_date: {
		type: DateScalar,
		description:
			'Reach goal on or before (See http://hl7.org/fhir/SearchParameter/Goal-target-date).',
	},
	status: {
		type: TokenScalar,
		description:
			'proposed | accepted | planned | in-progress | on-target | ahead-of-target | behind-target | sustaining | achieved | on-hold | cancelled | entered-in-error | rejected (See http://hl7.org/fhir/SearchParameter/Goal-status).',
	},
};
