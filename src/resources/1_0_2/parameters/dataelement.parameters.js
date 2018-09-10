const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the dataelement query
 */
module.exports = {
	stringency: {
		type: TokenScalar,
		description: 'The stringency of the data element definition (See http://hl7.org/fhir/SearchParameter/dataelement-stringency).'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the data element (See http://hl7.org/fhir/SearchParameter/dataelement-status).'
	},
	description: {
		type: GraphQLString,
		description: 'Text search in the description of the data element.  This corresponds to the definition of the first DataElement.element. (See http://hl7.org/fhir/SearchParameter/dataelement-description).'
	},
	name: {
		type: GraphQLString,
		description: 'Name of the data element (See http://hl7.org/fhir/SearchParameter/dataelement-name).'
	},
	context: {
		type: TokenScalar,
		description: 'A use context assigned to the data element (See http://hl7.org/fhir/SearchParameter/dataelement-context).'
	},
	code: {
		type: TokenScalar,
		description: 'A code for the data element (server may choose to do subsumption) (See http://hl7.org/fhir/SearchParameter/dataelement-code).'
	},
	date: {
		type: DateScalar,
		description: 'The data element publication date (See http://hl7.org/fhir/SearchParameter/dataelement-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identifier of the data element (See http://hl7.org/fhir/SearchParameter/dataelement-identifier).'
	},
	url: {
		type: UriScalar,
		description: 'The official URL for the data element (See http://hl7.org/fhir/SearchParameter/dataelement-url).'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the data element (See http://hl7.org/fhir/SearchParameter/dataelement-publisher).'
	},
	version: {
		type: GraphQLString,
		description: 'The version identifier of the data element (See http://hl7.org/fhir/SearchParameter/dataelement-version).'
	}
};
