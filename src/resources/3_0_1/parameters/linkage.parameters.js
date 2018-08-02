const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the linkage query
 */
module.exports = {
	item: {
		type: GraphQLString,
		description: 'Matches on any item in the Linkage. See http://hl7.org/fhir/SearchParameter/Linkage-item.'
	},
	author: {
		type: GraphQLString,
		description: 'Author of the Linkage. See http://hl7.org/fhir/SearchParameter/Linkage-author.'
	},
	source: {
		type: GraphQLString,
		description: 'Matches on any item in the Linkage with a type of \'source\'. See http://hl7.org/fhir/SearchParameter/Linkage-source.'
	}
};
