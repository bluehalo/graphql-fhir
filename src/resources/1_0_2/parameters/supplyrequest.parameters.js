const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the supplyrequest query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description: 'Patient for whom the item is supplied. See http://hl7.org/fhir/SearchParameter/supplyrequest-patient.'
	},
	source: {
		type: GraphQLString,
		description: 'Who initiated this order. See http://hl7.org/fhir/SearchParameter/supplyrequest-source.'
	},
	status: {
		type: TokenScalar,
		description: 'requested | completed | failed | cancelled. See http://hl7.org/fhir/SearchParameter/supplyrequest-status.'
	},
	date: {
		type: DateScalar,
		description: 'When the request was made. See http://hl7.org/fhir/SearchParameter/supplyrequest-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier. See http://hl7.org/fhir/SearchParameter/supplyrequest-identifier.'
	},
	supplier: {
		type: GraphQLString,
		description: 'Who is intended to fulfill the request. See http://hl7.org/fhir/SearchParameter/supplyrequest-supplier.'
	},
	kind: {
		type: TokenScalar,
		description: 'The kind of supply (central, non-stock, etc.). See http://hl7.org/fhir/SearchParameter/supplyrequest-kind.'
	}
};
