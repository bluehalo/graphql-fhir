const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationstatement query
 */
module.exports = {
	medication: {
		type: GraphQLString,
		description: 'Return administrations of this medication reference. See http://hl7.org/fhir/SearchParameter/medicationstatement-medication.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to list statements  for. See http://hl7.org/fhir/SearchParameter/medicationstatement-patient.'
	},
	source: {
		type: GraphQLString,
		description: 'Who the information in the statement came from. See http://hl7.org/fhir/SearchParameter/medicationstatement-source.'
	},
	status: {
		type: TokenScalar,
		description: 'Return statements that match the given status. See http://hl7.org/fhir/SearchParameter/medicationstatement-status.'
	},
	code: {
		type: TokenScalar,
		description: 'Return administrations of this medication code. See http://hl7.org/fhir/SearchParameter/medicationstatement-code.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Return statements with this external identifier. See http://hl7.org/fhir/SearchParameter/medicationstatement-identifier.'
	},
	effectivedate: {
		type: DateScalar,
		description: 'Date when patient was taking (or not taking) the medication. See http://hl7.org/fhir/SearchParameter/medicationstatement-effectivedate.'
	}
};
