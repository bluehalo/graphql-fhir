const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ExpansionProfile.designation.include Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileDesignationInclude_Input',
	description: 'Designations to be included.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			designation: {
				type: new GraphQLList(
					require('./expansionprofiledesignationincludedesignation.input'),
				),
				description: 'A data group for each designation to be included.',
			},
		}),
});
