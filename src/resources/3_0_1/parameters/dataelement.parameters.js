const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the dataelement query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The data element publication date. See http://hl7.org/fhir/SearchParameter/DataElement-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the data element. See http://hl7.org/fhir/SearchParameter/DataElement-identifier.'
	},
	code: {
		type: TokenScalar,
		description: 'A code for the data element (server may choose to do subsumption). See http://hl7.org/fhir/SearchParameter/DataElement-code.'
	},
	stringency: {
		type: TokenScalar,
		description: 'The stringency of the data element definition. See http://hl7.org/fhir/SearchParameter/DataElement-stringency.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the data element. See http://hl7.org/fhir/SearchParameter/DataElement-jurisdiction.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the data element. See http://hl7.org/fhir/SearchParameter/DataElement-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the data element. See http://hl7.org/fhir/SearchParameter/DataElement-publisher.'
	},
	description: {
		type: GraphQLString,
		description: 'Text search in the description of the data element.  This corresponds to the definition of the first DataElement.element. See http://hl7.org/fhir/SearchParameter/DataElement-description.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the data element. See http://hl7.org/fhir/SearchParameter/DataElement-title.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the data element. See http://hl7.org/fhir/SearchParameter/DataElement-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the data element. See http://hl7.org/fhir/SearchParameter/DataElement-url.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the data element. See http://hl7.org/fhir/SearchParameter/DataElement-status.'
	}
};
