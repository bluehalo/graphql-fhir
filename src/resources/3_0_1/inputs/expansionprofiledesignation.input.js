const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ExpansionProfile.designation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileDesignation_Input',
	description:
		'A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			include: {
				type: require('./expansionprofiledesignationinclude.input'),
				description: 'Designations to be included.',
			},
			exclude: {
				type: require('./expansionprofiledesignationexclude.input'),
				description: 'Designations to be excluded.',
			},
		}),
});
