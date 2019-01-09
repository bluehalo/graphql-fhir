const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the domainresource query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DomainResource-text
	_text: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: '',
		description: 'Search on the narrative of the resource',
	},
};
