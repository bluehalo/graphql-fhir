const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the compartmentdefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The compartment definition publication date. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-date.'
	},
	code: {
		type: TokenScalar,
		description: 'Patient | Encounter | RelatedPerson | Practitioner | Device. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-code.'
	},
	resource: {
		type: TokenScalar,
		description: 'Name of resource type. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-resource.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the compartment definition. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-jurisdiction.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the compartment definition. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-name.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the compartment definition. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-description.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the compartment definition. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-publisher.'
	},
	title: {
		type: GraphQLString,
		description: 'The human-friendly name of the compartment definition. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-title.'
	},
	url: {
		type: UriScalar,
		description: 'The uri that identifies the compartment definition. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-url.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the compartment definition. See http://hl7.org/fhir/SearchParameter/CompartmentDefinition-status.'
	}
};
