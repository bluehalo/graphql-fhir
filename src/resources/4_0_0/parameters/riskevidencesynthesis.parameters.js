const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the riskevidencesynthesis query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.useContext.valueCodeableConcept',
		description: 'A use context assigned to the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'RiskEvidenceSynthesis.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.useContext.code',
		description:
			'A type of use context assigned to the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'RiskEvidenceSynthesis.date',
		description: 'The risk evidence synthesis publication date',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.description',
		description: 'The description of the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'RiskEvidenceSynthesis.effectivePeriod',
		description:
			'The time during which the risk evidence synthesis is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.identifier',
		description: 'External identifier for the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.jurisdiction',
		description: 'Intended jurisdiction for the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.name',
		description: 'Computationally friendly name of the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.publisher',
		description: 'Name of the publisher of the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.status',
		description: 'The current status of the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RiskEvidenceSynthesis.title',
		description: 'The human-friendly name of the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'RiskEvidenceSynthesis.url',
		description: 'The uri that identifies the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RiskEvidenceSynthesis.version',
		description: 'The business version of the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the risk evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the risk evidence synthesis',
	},
};
