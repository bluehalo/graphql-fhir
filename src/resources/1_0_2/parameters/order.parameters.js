const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the order query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Order-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Order.date',
		description: 'When the order was made',
	},
	// http://hl7.org/fhir/SearchParameter/Order-detail
	detail: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Order.detail',
		description: 'What action is being ordered',
	},
	// http://hl7.org/fhir/SearchParameter/Order-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Order.identifier',
		description: 'Instance id from source, target, and/or  others',
	},
	// http://hl7.org/fhir/SearchParameter/Order-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Order.subject',
		description: 'Patient this order is about',
	},
	// http://hl7.org/fhir/SearchParameter/Order-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Order.source',
		description: 'Who initiated the order',
	},
	// http://hl7.org/fhir/SearchParameter/Order-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Order.subject',
		description: 'Patient this order is about',
	},
	// http://hl7.org/fhir/SearchParameter/Order-target
	target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Order.target',
		description: 'Who is intended to fulfill the order',
	},
	// http://hl7.org/fhir/SearchParameter/Order-when
	when: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Order.when.schedule',
		description: 'A formal schedule',
	},
	// http://hl7.org/fhir/SearchParameter/Order-whencode
	when_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Order.when.code',
		description:
			'Code specifies when request should be done. The code may simply be a priority code',
	},
};
