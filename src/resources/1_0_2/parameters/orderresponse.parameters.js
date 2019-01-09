const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the orderresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/OrderResponse-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OrderResponse.orderStatus',
		description:
			'pending | review | rejected | error | accepted | cancelled | replaced | aborted | completed',
	},
	// http://hl7.org/fhir/SearchParameter/OrderResponse-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'OrderResponse.date',
		description: 'When the response was made',
	},
	// http://hl7.org/fhir/SearchParameter/OrderResponse-fulfillment
	fulfillment: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrderResponse.fulfillment',
		description: 'Details of the outcome of performing the order',
	},
	// http://hl7.org/fhir/SearchParameter/OrderResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'OrderResponse.identifier',
		description:
			'Identifiers assigned to this order by the orderer or by the receiver',
	},
	// http://hl7.org/fhir/SearchParameter/OrderResponse-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrderResponse.request',
		description: 'The order that this is a response to',
	},
	// http://hl7.org/fhir/SearchParameter/OrderResponse-who
	who: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'OrderResponse.who',
		description: 'Who made the response',
	},
};
