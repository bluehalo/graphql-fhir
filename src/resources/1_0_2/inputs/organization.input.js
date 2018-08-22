const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let OrganizationResourceInputType = new GraphQLEnumType({
	name: 'OrganizationResourceInputType',
	values: {
		Organization: { value: 'Organization' }
	}
});

/**
 * @name exports
 * @summary Organization Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Organization_Input',
	description: 'Base StructureDefinition for Organization Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(OrganizationResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier for the organization that is used to identify the organization across multiple disparate systems.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether the organization\'s record is still in active use.'
		},
		_active: {
			type: require('./element.input'),
			description: 'Whether the organization\'s record is still in active use.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/organization-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'The kind of organization that this is.'
		},
		name: {
			type: GraphQLString,
			description: 'A name associated with the organization.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A name associated with the organization.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail for the organization.'
		},
		address: {
			type: new GraphQLList(require('./address.input')),
			description: 'An address for the organization.'
		},
		partOf: {
			type: require('./reference.input'),
			description: 'The organization of which this organization forms a part.'
		},
		contact: {
			type: new GraphQLList(require('./organizationcontact.input')),
			description: 'Contact for the organization for a certain purpose.'
		}
	})
});
