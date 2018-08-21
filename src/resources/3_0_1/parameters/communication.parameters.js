const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the communication query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier. See http://hl7.org/fhir/SearchParameter/Communication-identifier.'
	},
	subject: {
		type: GraphQLString,
		description: 'Focus of message. See http://hl7.org/fhir/SearchParameter/Communication-subject.'
	},
	received: {
		type: DateScalar,
		description: 'When received. See http://hl7.org/fhir/SearchParameter/Communication-received.'
	},
	part_of: {
		type: GraphQLString,
		description: 'Part of this action. See http://hl7.org/fhir/SearchParameter/Communication-part-of.'
	},
	medium: {
		type: TokenScalar,
		description: 'A channel of communication. See http://hl7.org/fhir/SearchParameter/Communication-medium.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter leading to message. See http://hl7.org/fhir/SearchParameter/Communication-encounter.'
	},
	sent: {
		type: DateScalar,
		description: 'When sent. See http://hl7.org/fhir/SearchParameter/Communication-sent.'
	},
	based_on: {
		type: GraphQLString,
		description: 'Request fulfilled by this communication. See http://hl7.org/fhir/SearchParameter/Communication-based-on.'
	},
	sender: {
		type: GraphQLString,
		description: 'Message sender. See http://hl7.org/fhir/SearchParameter/Communication-sender.'
	},
	patient: {
		type: GraphQLString,
		description: 'Focus of message. See http://hl7.org/fhir/SearchParameter/Communication-patient.'
	},
	recipient: {
		type: GraphQLString,
		description: 'Message recipient. See http://hl7.org/fhir/SearchParameter/Communication-recipient.'
	},
	context: {
		type: GraphQLString,
		description: 'Encounter or episode leading to message. See http://hl7.org/fhir/SearchParameter/Communication-context.'
	},
	definition: {
		type: GraphQLString,
		description: 'Instantiates protocol or definition. See http://hl7.org/fhir/SearchParameter/Communication-definition.'
	},
	category: {
		type: TokenScalar,
		description: 'Message category. See http://hl7.org/fhir/SearchParameter/Communication-category.'
	},
	status: {
		type: TokenScalar,
		description: 'preparation | in-progress | suspended | aborted | completed | entered-in-error. See http://hl7.org/fhir/SearchParameter/Communication-status.'
	}
};
