const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the order query
 */
module.exports = {
	detail: {
		type: GraphQLString,
		description:
			'What action is being ordered (See http://hl7.org/fhir/SearchParameter/order-detail).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Patient this order is about (See http://hl7.org/fhir/SearchParameter/order-patient).',
	},
	source: {
		type: GraphQLString,
		description:
			'Who initiated the order (See http://hl7.org/fhir/SearchParameter/order-source).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Patient this order is about (See http://hl7.org/fhir/SearchParameter/order-subject).',
	},
	when: {
		type: DateScalar,
		description:
			'A formal schedule (See http://hl7.org/fhir/SearchParameter/order-when).',
	},
	target: {
		type: GraphQLString,
		description:
			'Who is intended to fulfill the order (See http://hl7.org/fhir/SearchParameter/order-target).',
	},
	when_code: {
		type: TokenScalar,
		description:
			'Code specifies when request should be done. The code may simply be a priority code (See http://hl7.org/fhir/SearchParameter/order-whencode).',
	},
	date: {
		type: DateScalar,
		description:
			'When the order was made (See http://hl7.org/fhir/SearchParameter/order-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Instance id from source, target, and/or  others (See http://hl7.org/fhir/SearchParameter/order-identifier).',
	},
};
