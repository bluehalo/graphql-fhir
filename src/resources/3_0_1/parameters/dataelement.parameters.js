const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the dataelement query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DataElement-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DataElement.element.code',
		description:
			'A code for the data element (server may choose to do subsumption)',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DataElement.date',
		description: 'The data element publication date',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DataElement.element.definition',
		description:
			'Text search in the description of the data element.  This corresponds to the definition of the first DataElement.element.',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DataElement.identifier',
		description: 'External identifier for the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DataElement.jurisdiction',
		description: 'Intended jurisdiction for the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DataElement.name',
		description: 'Computationally friendly name of the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DataElement.publisher',
		description: 'Name of the publisher of the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DataElement.status',
		description: 'The current status of the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-stringency
	stringency: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DataElement.stringency',
		description: 'The stringency of the data element definition',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DataElement.title',
		description: 'The human-friendly name of the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'DataElement.url',
		description: 'The uri that identifies the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DataElement.version',
		description: 'The business version of the data element',
	},
	// http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClass
	objectClass: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath:
			"DataElement.element.mapping.extension[@url='http://hl7.org/fhir/StructureDefinition/11179-objectClass']",
		description: 'Matches on the 11179-objectClass extension value',
	},
	// http://hl7.org/fhir/SearchParameter/elementdefinition-11179-DataElement-objectClassProperty
	objectClassProperty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath:
			"DataElement.element.mapping.extension[@url='http://hl7.org/fhir/StructureDefinition/11179-objectClassProperty']",
		description: 'Matches on the 11179-objectClassProperty extension value',
	},
};
