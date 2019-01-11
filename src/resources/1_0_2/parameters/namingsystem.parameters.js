const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the namingsystem query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/NamingSystem-contact
	contact: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.contact.name',
		description: 'Name of a individual to contact',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.useContext',
		description: 'Content intends to support these contexts',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'NamingSystem.date',
		description: 'Publication Date(/time)',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-id-type
	id_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.uniqueId.type',
		description: 'oid | uuid | uri | other',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-kind
	kind: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.kind',
		description: 'codesystem | identifier | root',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.name',
		description: 'Human-readable label',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'NamingSystem.uniqueId.period',
		description: 'When is identifier valid?',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.publisher',
		description: 'Name of the publisher (Organization or individual)',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-replaced-by
	replaced_by: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'NamingSystem.replacedBy',
		description: 'Use this instead',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-responsible
	responsible: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.responsible',
		description: 'Who maintains system namespace?',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.status',
		description: 'draft | active | retired',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.contact.telecom',
		description: 'Contact details for individual or publisher',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.type',
		description: 'e.g. driver,  provider,  patient, bank etc.',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-value
	value: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.uniqueId.value',
		description: 'The unique identifier',
	},
};
