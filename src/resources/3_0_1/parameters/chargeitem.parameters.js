const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the chargeitem query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Business Identifier for item. See http://hl7.org/fhir/SearchParameter/ChargeItem-identifier.'
	},
	performing_organization: {
		type: GraphQLString,
		description: 'Organization providing the charged sevice. See http://hl7.org/fhir/SearchParameter/ChargeItem-performing-organization.'
	},
	code: {
		type: TokenScalar,
		description: 'A code that identifies the charge, like a billing code. See http://hl7.org/fhir/SearchParameter/ChargeItem-code.'
	},
	quantity: {
		type: GraphQLString,
		description: 'Quantity of which the charge item has been serviced. See http://hl7.org/fhir/SearchParameter/ChargeItem-quantity.'
	},
	subject: {
		type: GraphQLString,
		description: 'Individual service was done for/to. See http://hl7.org/fhir/SearchParameter/ChargeItem-subject.'
	},
	participant_role: {
		type: TokenScalar,
		description: 'What type of performance was done. See http://hl7.org/fhir/SearchParameter/ChargeItem-participant-role.'
	},
	participant_actor: {
		type: GraphQLString,
		description: 'Individual who was performing. See http://hl7.org/fhir/SearchParameter/ChargeItem-participant-actor.'
	},
	occurrence: {
		type: DateScalar,
		description: 'When the charged service was applied. See http://hl7.org/fhir/SearchParameter/ChargeItem-occurrence.'
	},
	entered_date: {
		type: DateScalar,
		description: 'Date the charge item was entered. See http://hl7.org/fhir/SearchParameter/ChargeItem-entered-date.'
	},
	patient: {
		type: GraphQLString,
		description: 'Individual service was done for/to. See http://hl7.org/fhir/SearchParameter/ChargeItem-patient.'
	},
	factor_override: {
		type: GraphQLString,
		description: 'Factor overriding the associated rules. See http://hl7.org/fhir/SearchParameter/ChargeItem-factor-override.'
	},
	service: {
		type: GraphQLString,
		description: 'Which rendered service is being charged?. See http://hl7.org/fhir/SearchParameter/ChargeItem-service.'
	},
	price_override: {
		type: GraphQLString,
		description: 'Price overriding the associated rules. See http://hl7.org/fhir/SearchParameter/ChargeItem-price-override.'
	},
	context: {
		type: GraphQLString,
		description: 'Encounter / Episode associated with event. See http://hl7.org/fhir/SearchParameter/ChargeItem-context.'
	},
	enterer: {
		type: GraphQLString,
		description: 'Individual who was entering. See http://hl7.org/fhir/SearchParameter/ChargeItem-enterer.'
	},
	account: {
		type: GraphQLString,
		description: 'Account to place this charge. See http://hl7.org/fhir/SearchParameter/ChargeItem-account.'
	},
	requesting_organization: {
		type: GraphQLString,
		description: 'Organization requesting the charged service. See http://hl7.org/fhir/SearchParameter/ChargeItem-requesting-organization.'
	}
};
