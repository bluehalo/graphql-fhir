const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the procedurerequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.encounter',
		description: 'Encounter request created during',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcedureRequest.identifier',
		description: 'A unique identifier of the Procedure Request',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-orderer
	orderer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.orderer',
		description: 'Who made request',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.subject',
		description: 'Search by subject - a patient',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.performer',
		description: 'Who should perform the procedure',
	},
	// http://hl7.org/fhir/SearchParameter/ProcedureRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcedureRequest.subject',
		description: 'Search by subject',
	},
};
