const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the measure query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The measure publication date. See http://hl7.org/fhir/SearchParameter/Measure-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier for the measure. See http://hl7.org/fhir/SearchParameter/Measure-identifier.'
	},
	successor: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Measure-successor.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the measure. See http://hl7.org/fhir/SearchParameter/Measure-jurisdiction.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the measure. See http://hl7.org/fhir/SearchParameter/Measure-description.'
	},
	derived_from: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Measure-derived-from.'
	},
	predecessor: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Measure-predecessor.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the measure. See http://hl7.org/fhir/SearchParameter/Measure-title.'
	},
	composed_of: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Measure-composed-of.'
	},
	version: {
		type: TokenScalar,
		description: 'The business version of the measure. See http://hl7.org/fhir/SearchParameter/Measure-version.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the measure. See http://hl7.org/fhir/SearchParameter/Measure-url.'
	},
	effective: {
		type: DateScalar,
		description: 'The time during which the measure is intended to be in use. See http://hl7.org/fhir/SearchParameter/Measure-effective.'
	},
	depends_on: {
		type: GraphQLString,
		description: 'What resource is being referenced. See http://hl7.org/fhir/SearchParameter/Measure-depends-on.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the measure. See http://hl7.org/fhir/SearchParameter/Measure-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the measure. See http://hl7.org/fhir/SearchParameter/Measure-publisher.'
	},
	topic: {
		type: TokenScalar,
		description: 'Topics associated with the module. See http://hl7.org/fhir/SearchParameter/Measure-topic.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the measure. See http://hl7.org/fhir/SearchParameter/Measure-status.'
	}
};
