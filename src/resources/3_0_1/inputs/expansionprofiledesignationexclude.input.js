const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ExpansionProfile.designation.exclude Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileDesignationExclude_Input',
	description: 'Designations to be excluded.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		designation: {
			type: new GraphQLList(require('./expansionprofiledesignationexcludedesignation.input')),
			description: 'A data group for each designation to be excluded.'
		}
	})
});
