const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the effectevidencesynthesis query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.useContext.valueCodeableConcept',
		description: 'A use context assigned to the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'EffectEvidenceSynthesis.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.useContext.code',
		description:
			'A type of use context assigned to the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EffectEvidenceSynthesis.date',
		description: 'The effect evidence synthesis publication date',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.description',
		description: 'The description of the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-effective
	effective: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EffectEvidenceSynthesis.effectivePeriod',
		description:
			'The time during which the effect evidence synthesis is intended to be in use',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.identifier',
		description: 'External identifier for the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.jurisdiction',
		description: 'Intended jurisdiction for the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.name',
		description:
			'Computationally friendly name of the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.publisher',
		description: 'Name of the publisher of the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.status',
		description: 'The current status of the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EffectEvidenceSynthesis.title',
		description: 'The human-friendly name of the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'EffectEvidenceSynthesis.url',
		description: 'The uri that identifies the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EffectEvidenceSynthesis.version',
		description: 'The business version of the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the effect evidence synthesis',
	},
	// http://hl7.org/fhir/SearchParameter/EffectEvidenceSynthesis-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the effect evidence synthesis',
	},
};
