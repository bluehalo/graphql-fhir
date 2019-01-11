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
	// http://hl7.org/fhir/SearchParameter/DataElement-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DataElement.useContext',
		description: 'A use context assigned to the data element',
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
		description: 'The identifier of the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DataElement.name',
		description: 'Name of the data element',
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
	// http://hl7.org/fhir/SearchParameter/DataElement-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'DataElement.url',
		description: 'The official URL for the data element',
	},
	// http://hl7.org/fhir/SearchParameter/DataElement-version
	version: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DataElement.version',
		description: 'The version identifier of the data element',
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
