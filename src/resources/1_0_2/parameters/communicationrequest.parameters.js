const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the communicationrequest query
 */
module.exports = {
	sender: {
		type: GraphQLString,
		description: 'Message sender (See http://hl7.org/fhir/SearchParameter/communicationrequest-sender).'
	},
	requested: {
		type: DateScalar,
		description: 'When ordered or proposed (See http://hl7.org/fhir/SearchParameter/communicationrequest-requested).'
	},
	time: {
		type: DateScalar,
		description: 'When scheduled (See http://hl7.org/fhir/SearchParameter/communicationrequest-time).'
	},
	requester: {
		type: GraphQLString,
		description: 'An individual who requested a communication (See http://hl7.org/fhir/SearchParameter/communicationrequest-requester).'
	},
	category: {
		type: TokenScalar,
		description: 'Message category (See http://hl7.org/fhir/SearchParameter/communicationrequest-category).'
	},
	patient: {
		type: GraphQLString,
		description: 'Focus of message (See http://hl7.org/fhir/SearchParameter/communicationrequest-patient).'
	},
	status: {
		type: TokenScalar,
		description: 'proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | failed (See http://hl7.org/fhir/SearchParameter/communicationrequest-status).'
	},
	priority: {
		type: TokenScalar,
		description: 'Message urgency (See http://hl7.org/fhir/SearchParameter/communicationrequest-priority).'
	},
	subject: {
		type: GraphQLString,
		description: 'Focus of message (See http://hl7.org/fhir/SearchParameter/communicationrequest-subject).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter leading to message (See http://hl7.org/fhir/SearchParameter/communicationrequest-encounter).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier (See http://hl7.org/fhir/SearchParameter/communicationrequest-identifier).'
	},
	medium: {
		type: TokenScalar,
		description: 'A channel of communication (See http://hl7.org/fhir/SearchParameter/communicationrequest-medium).'
	},
	recipient: {
		type: GraphQLString,
		description: 'Message recipient (See http://hl7.org/fhir/SearchParameter/communicationrequest-recipient).'
	}
};
