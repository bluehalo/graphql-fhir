const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the chargeitemdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.useContext.valueCodeableConcept',
		description: 'A use context assigned to the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'ChargeItemDefinition.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.useContext.code',
		description: 'A type of use context assigned to the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ChargeItemDefinition.date',
		description: 'The charge item definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ChargeItemDefinition.description',
		description: 'The description of the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ChargeItemDefinition.effectivePeriod',
		description:
			'The time during which the charge item definition is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.identifier',
		description: 'External identifier for the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.jurisdiction',
		description: 'Intended jurisdiction for the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ChargeItemDefinition.publisher',
		description: 'Name of the publisher of the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.status',
		description: 'The current status of the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ChargeItemDefinition.title',
		description: 'The human-friendly name of the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ChargeItemDefinition.url',
		description: 'The uri that identifies the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ChargeItemDefinition.version',
		description: 'The business version of the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the charge item definition',
	},
	// http://hl7.org/fhir/SearchParameter/ChargeItemDefinition-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the charge item definition',
	},
};
