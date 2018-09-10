const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the communication query
 */
module.exports = {
	sender: {
		type: GraphQLString,
		description: 'Message sender (See http://hl7.org/fhir/SearchParameter/communication-sender).'
	},
	sent: {
		type: DateScalar,
		description: 'When sent (See http://hl7.org/fhir/SearchParameter/communication-sent).'
	},
	category: {
		type: TokenScalar,
		description: 'Message category (See http://hl7.org/fhir/SearchParameter/communication-category).'
	},
	patient: {
		type: GraphQLString,
		description: 'Focus of message (See http://hl7.org/fhir/SearchParameter/communication-patient).'
	},
	status: {
		type: TokenScalar,
		description: 'in-progress | completed | suspended | rejected | failed (See http://hl7.org/fhir/SearchParameter/communication-status).'
	},
	subject: {
		type: GraphQLString,
		description: 'Focus of message (See http://hl7.org/fhir/SearchParameter/communication-subject).'
	},
	request: {
		type: GraphQLString,
		description: 'CommunicationRequest producing this message (See http://hl7.org/fhir/SearchParameter/communication-request).'
	},
	received: {
		type: DateScalar,
		description: 'When received (See http://hl7.org/fhir/SearchParameter/communication-received).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter leading to message (See http://hl7.org/fhir/SearchParameter/communication-encounter).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier (See http://hl7.org/fhir/SearchParameter/communication-identifier).'
	},
	medium: {
		type: TokenScalar,
		description: 'A channel of communication (See http://hl7.org/fhir/SearchParameter/communication-medium).'
	},
	recipient: {
		type: GraphQLString,
		description: 'Message recipient (See http://hl7.org/fhir/SearchParameter/communication-recipient).'
	}
};
