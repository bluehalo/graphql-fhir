const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

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
		description: 'Name of an individual to contact',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'NamingSystem.date',
		description: 'The naming system publication date',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'NamingSystem.description',
		description: 'The description of the naming system',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-id-type
	id_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.uniqueId.type',
		description: 'oid | uuid | uri | other',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.jurisdiction',
		description: 'Intended jurisdiction for the naming system',
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
		description: 'Computationally friendly name of the naming system',
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
		description: 'Name of the publisher of the naming system',
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
		description: 'The current status of the naming system',
	},
	// http://hl7.org/fhir/SearchParameter/NamingSystem-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'NamingSystem.contact.telecom',
		description: 'Contact details for individual or organization',
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
