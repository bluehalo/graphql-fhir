const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationstatement query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Return statements with this external identifier. See http://hl7.org/fhir/SearchParameter/medications-identifier.'
	},
	effective: {
		type: DateScalar,
		description: 'Date when patient was taking (or not taking) the medication. See http://hl7.org/fhir/SearchParameter/MedicationStatement-effective.'
	},
	code: {
		type: TokenScalar,
		description: 'Return statements of this medication code. See http://hl7.org/fhir/SearchParameter/medications-code.'
	},
	subject: {
		type: GraphQLString,
		description: 'The identity of a patient, animal or group to list statements for. See http://hl7.org/fhir/SearchParameter/MedicationStatement-subject.'
	},
	patient: {
		type: GraphQLString,
		description: 'Returns statements for a specific patient. See http://hl7.org/fhir/SearchParameter/medications-patient.'
	},
	context: {
		type: GraphQLString,
		description: 'Returns statements for a specific context (episode or episode of Care). See http://hl7.org/fhir/SearchParameter/MedicationStatement-context.'
	},
	medication: {
		type: GraphQLString,
		description: 'Return statements of this medication reference. See http://hl7.org/fhir/SearchParameter/medications-medication.'
	},
	part_of: {
		type: GraphQLString,
		description: 'Returns statements that are part of another event. See http://hl7.org/fhir/SearchParameter/MedicationStatement-part-of.'
	},
	source: {
		type: GraphQLString,
		description: 'Who or where the information in the statement came from. See http://hl7.org/fhir/SearchParameter/MedicationStatement-source.'
	},
	category: {
		type: TokenScalar,
		description: 'Returns statements of this category of medicationstatement. See http://hl7.org/fhir/SearchParameter/MedicationStatement-category.'
	},
	status: {
		type: TokenScalar,
		description: 'Return statements that match the given status. See http://hl7.org/fhir/SearchParameter/medications-status.'
	}
};
