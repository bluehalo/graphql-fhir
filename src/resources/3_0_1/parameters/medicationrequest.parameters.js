const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationrequest query
 */
module.exports = {
	requester: {
		type: GraphQLString,
		description: 'Returns prescriptions prescribed by this prescriber. See http://hl7.org/fhir/SearchParameter/MedicationRequest-requester.'
	},
	date: {
		type: DateScalar,
		description: 'Returns medication request to be administered on a specific date. See http://hl7.org/fhir/SearchParameter/medications-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Return prescriptions with this external identifier. See http://hl7.org/fhir/SearchParameter/medications-identifier.'
	},
	intended_dispenser: {
		type: GraphQLString,
		description: 'Returns prescriptions intended to be dispensed by this Organization. See http://hl7.org/fhir/SearchParameter/MedicationRequest-intended-dispenser.'
	},
	authoredon: {
		type: DateScalar,
		description: 'Return prescriptions written on this date. See http://hl7.org/fhir/SearchParameter/MedicationRequest-authoredon.'
	},
	code: {
		type: TokenScalar,
		description: 'Return prescriptions of this medication code. See http://hl7.org/fhir/SearchParameter/medications-code.'
	},
	subject: {
		type: GraphQLString,
		description: 'The identity of a patient to list orders  for. See http://hl7.org/fhir/SearchParameter/MedicationRequest-subject.'
	},
	medication: {
		type: GraphQLString,
		description: 'Return prescriptions of this medication reference. See http://hl7.org/fhir/SearchParameter/medications-medication.'
	},
	priority: {
		type: TokenScalar,
		description: 'Returns prescriptions with different priorities. See http://hl7.org/fhir/SearchParameter/MedicationRequest-priority.'
	},
	intent: {
		type: TokenScalar,
		description: 'Returns prescriptions with different intents. See http://hl7.org/fhir/SearchParameter/MedicationRequest-intent.'
	},
	patient: {
		type: GraphQLString,
		description: 'Returns prescriptions for a specific patient. See http://hl7.org/fhir/SearchParameter/medications-patient.'
	},
	context: {
		type: GraphQLString,
		description: 'Return prescriptions with this encounter or episode of care identifier. See http://hl7.org/fhir/SearchParameter/MedicationRequest-context.'
	},
	category: {
		type: TokenScalar,
		description: 'Returns prescriptions with different categories. See http://hl7.org/fhir/SearchParameter/MedicationRequest-category.'
	},
	status: {
		type: TokenScalar,
		description: 'Status of the prescription. See http://hl7.org/fhir/SearchParameter/medications-status.'
	}
};
