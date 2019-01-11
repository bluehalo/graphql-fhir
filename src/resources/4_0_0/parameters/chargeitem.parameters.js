const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the chargeitem query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ChargeItem-account
	account: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.account',
		description: 'Account to place this charge',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItem.code',
		description: 'A code that identifies the charge, like a billing code',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.context',
		description: 'Encounter / Episode associated with event',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-entered-date
	entered_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ChargeItem.enteredDate',
		description: 'Date the charge item was entered',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-enterer
	enterer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.enterer',
		description: 'Individual who was entering',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-factor-override
	factor_override: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'ChargeItem.factorOverride',
		description: 'Factor overriding the associated rules',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItem.identifier',
		description: 'Business Identifier for item',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-occurrence
	occurrence: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ChargeItem.occurrenceDateTime',
		description: 'When the charged service was applied',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.subject',
		description: 'Individual service was done for/to',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-performer-actor
	performer_actor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.performer.actor',
		description: 'Individual who was performing',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-performer-function
	performer_function: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItem.performer.function',
		description: 'What type of performance was done',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-performing-organization
	performing_organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.performingOrganization',
		description: 'Organization providing the charged service',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-price-override
	price_override: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'ChargeItem.priceOverride',
		description: 'Price overriding the associated rules',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-quantity
	quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'ChargeItem.quantity',
		description: 'Quantity of which the charge item has been serviced',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-requesting-organization
	requesting_organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.requestingOrganization',
		description: 'Organization requesting the charged service',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-service
	service: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.service',
		description: 'Which rendered service is being charged?',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItem-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ChargeItem.subject',
		description: 'Individual service was done for/to',
	},
};
