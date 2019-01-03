const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Organization.contact Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OrganizationContact',
	description: 'Contact for the organization for a certain purpose.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contactentity-type
		purpose: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates a purpose for which the contact can be reached.'
		},
		name: {
			type: require('./humanname.schema'),
			description: 'A name associated with the contact.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.'
		},
		address: {
			type: require('./address.schema'),
			description: 'Visiting or postal addresses for the contact.'
		}
	})
});
