const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicerequest query
 */
module.exports = {
	requester: {
		type: GraphQLString,
		description: 'Who/what is requesting service . See http://hl7.org/fhir/SearchParameter/DeviceRequest-requester.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business identifier for request/order. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	code: {
		type: TokenScalar,
		description: 'Code for what is being requested/ordered. See http://hl7.org/fhir/SearchParameter/clinical-code.'
	},
	performer: {
		type: GraphQLString,
		description: 'Desired performer for service. See http://hl7.org/fhir/SearchParameter/DeviceRequest-performer.'
	},
	event_date: {
		type: DateScalar,
		description: 'When service should occur. See http://hl7.org/fhir/SearchParameter/DeviceRequest-event-date.'
	},
	subject: {
		type: GraphQLString,
		description: 'Individual the service is ordered for. See http://hl7.org/fhir/SearchParameter/DeviceRequest-subject.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter or Episode during which request was created. See http://hl7.org/fhir/SearchParameter/clinical-encounter.'
	},
	authored_on: {
		type: DateScalar,
		description: 'When the request transitioned to being actionable. See http://hl7.org/fhir/SearchParameter/DeviceRequest-authored-on.'
	},
	intent: {
		type: TokenScalar,
		description: 'proposal | plan | original-order |reflex-order. See http://hl7.org/fhir/SearchParameter/DeviceRequest-intent.'
	},
	group_identifier: {
		type: TokenScalar,
		description: 'Composite request this is part of. See http://hl7.org/fhir/SearchParameter/DeviceRequest-group-identifier.'
	},
	based_on: {
		type: GraphQLString,
		description: 'Plan/proposal/order fulfilled by this request. See http://hl7.org/fhir/SearchParameter/DeviceRequest-based-on.'
	},
	priorrequest: {
		type: GraphQLString,
		description: 'Request takes the place of referenced completed or terminated requests. See http://hl7.org/fhir/SearchParameter/DeviceRequest-priorrequest.'
	},
	patient: {
		type: GraphQLString,
		description: 'Individual the service is ordered for. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	definition: {
		type: GraphQLString,
		description: 'Protocol or definition followed by this request. See http://hl7.org/fhir/SearchParameter/DeviceRequest-definition.'
	},
	device: {
		type: GraphQLString,
		description: 'Reference to resource that is being requested/ordered. See http://hl7.org/fhir/SearchParameter/DeviceRequest-device.'
	},
	status: {
		type: TokenScalar,
		description: 'entered-in-error | draft | active |suspended | completed . See http://hl7.org/fhir/SearchParameter/DeviceRequest-status.'
	}
};
