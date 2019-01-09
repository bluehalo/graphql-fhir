const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the compartmentdefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.code',
		description: 'Patient | Encounter | RelatedPerson | Practitioner | Device',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CompartmentDefinition.date',
		description: 'The compartment definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.description',
		description: 'The description of the compartment definition',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.jurisdiction',
		description: 'Intended jurisdiction for the compartment definition',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.name',
		description: 'Computationally friendly name of the compartment definition',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.publisher',
		description: 'Name of the publisher of the compartment definition',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-resource
	resource: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.resource.code',
		description: 'Name of resource type',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CompartmentDefinition.status',
		description: 'The current status of the compartment definition',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CompartmentDefinition.title',
		description: 'The human-friendly name of the compartment definition',
	},
	// http://hl7.org/fhir/SearchParameter/CompartmentDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'CompartmentDefinition.url',
		description: 'The uri that identifies the compartment definition',
	},
};
