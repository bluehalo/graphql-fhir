const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the procedurerequest query
 */
module.exports = {
	authored: {
		type: DateScalar,
		description: 'Date request signed. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-authored.'
	},
	requester: {
		type: GraphQLString,
		description: 'Individual making the request. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-requester.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifiers assigned to this order. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	code: {
		type: TokenScalar,
		description: 'What is being requested/ordered. See http://hl7.org/fhir/SearchParameter/clinical-code.'
	},
	performer: {
		type: GraphQLString,
		description: 'Requested perfomer. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer.'
	},
	requisition: {
		type: TokenScalar,
		description: 'Composite Request ID. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-requisition.'
	},
	replaces: {
		type: GraphQLString,
		description: 'What request replaces. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-replaces.'
	},
	subject: {
		type: GraphQLString,
		description: 'Search by subject. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-subject.'
	},
	encounter: {
		type: GraphQLString,
		description: 'An encounter in which this request is made. See http://hl7.org/fhir/SearchParameter/clinical-encounter.'
	},
	occurrence: {
		type: DateScalar,
		description: 'When procedure should occur. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-occurrence.'
	},
	priority: {
		type: TokenScalar,
		description: 'routine | urgent | asap | stat. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-priority.'
	},
	intent: {
		type: TokenScalar,
		description: 'proposal | plan | order +. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-intent.'
	},
	performer_type: {
		type: TokenScalar,
		description: 'Performer role. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-performer-type.'
	},
	based_on: {
		type: GraphQLString,
		description: 'What request fulfills. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-based-on.'
	},
	patient: {
		type: GraphQLString,
		description: 'Search by subject - a patient. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	specimen: {
		type: GraphQLString,
		description: 'Specimen to be tested. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-specimen.'
	},
	context: {
		type: GraphQLString,
		description: 'Encounter or Episode during which request was created. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-context.'
	},
	definition: {
		type: GraphQLString,
		description: 'Protocol or definition. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-definition.'
	},
	body_site: {
		type: TokenScalar,
		description: 'Where procedure is going to be done. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-body-site.'
	},
	status: {
		type: TokenScalar,
		description: 'draft | active | suspended | completed | entered-in-error | cancelled. See http://hl7.org/fhir/SearchParameter/ProcedureRequest-status.'
	}
};
