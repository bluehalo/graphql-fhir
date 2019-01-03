const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Organization.contact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OrganizationContact_Input',
	description: 'Contact for the organization for a certain purpose.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contactentity-type
		purpose: {
			type: require('./codeableconcept.input'),
			description: 'Indicates a purpose for which the contact can be reached.'
		},
		name: {
			type: require('./humanname.input'),
			description: 'A name associated with the contact.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.'
		},
		address: {
			type: require('./address.input'),
			description: 'Visiting or postal addresses for the contact.'
		}
	})
});
