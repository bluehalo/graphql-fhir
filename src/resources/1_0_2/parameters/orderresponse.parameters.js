const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the orderresponse query
 */
module.exports = {
	fulfillment: {
		type: GraphQLString,
		description: 'Details of the outcome of performing the order (See http://hl7.org/fhir/SearchParameter/orderresponse-fulfillment).'
	},
	request: {
		type: GraphQLString,
		description: 'The order that this is a response to (See http://hl7.org/fhir/SearchParameter/orderresponse-request).'
	},
	code: {
		type: TokenScalar,
		description: 'pending | review | rejected | error | accepted | cancelled | replaced | aborted | completed (See http://hl7.org/fhir/SearchParameter/orderresponse-code).'
	},
	date: {
		type: DateScalar,
		description: 'When the response was made (See http://hl7.org/fhir/SearchParameter/orderresponse-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifiers assigned to this order by the orderer or by the receiver (See http://hl7.org/fhir/SearchParameter/orderresponse-identifier).'
	},
	who: {
		type: GraphQLString,
		description: 'Who made the response (See http://hl7.org/fhir/SearchParameter/orderresponse-who).'
	}
};
