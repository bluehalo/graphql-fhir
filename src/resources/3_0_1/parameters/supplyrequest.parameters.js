const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the supplyrequest query
 */
module.exports = {
	requester: {
		type: GraphQLString,
		description: 'Individual making the request. See http://hl7.org/fhir/SearchParameter/SupplyRequest-requester.'
	},
	date: {
		type: DateScalar,
		description: 'When the request was made. See http://hl7.org/fhir/SearchParameter/clinical-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	supplier: {
		type: GraphQLString,
		description: 'Who is intended to fulfill the request. See http://hl7.org/fhir/SearchParameter/SupplyRequest-supplier.'
	},
	category: {
		type: TokenScalar,
		description: 'The kind of supply (central, non-stock, etc.). See http://hl7.org/fhir/SearchParameter/SupplyRequest-category.'
	},
	status: {
		type: TokenScalar,
		description: 'draft | active | suspended +. See http://hl7.org/fhir/SearchParameter/SupplyRequest-status.'
	}
};
