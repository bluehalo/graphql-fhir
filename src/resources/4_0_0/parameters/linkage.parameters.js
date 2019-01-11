const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the linkage query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Linkage-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Linkage.author',
		description: 'Author of the Linkage',
	},
	// http://hl7.org/fhir/SearchParameter/Linkage-item
	item: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Linkage.item.resource',
		description: 'Matches on any item in the Linkage',
	},
	// http://hl7.org/fhir/SearchParameter/Linkage-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Linkage.item.resource',
		description: "Matches on any item in the Linkage with a type of 'source'",
	},
};
