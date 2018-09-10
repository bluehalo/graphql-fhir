const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let OrganizationResourceType = new GraphQLEnumType({
	name: 'OrganizationResourceType',
	values: {
		Organization: { value: 'Organization' }
	}
});

/**
 * @name exports
 * @summary Organization Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Organization',
	description: 'Base StructureDefinition for Organization Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(OrganizationResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier for the organization that is used to identify the organization across multiple disparate systems.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether the organization\'s record is still in active use.'
		},
		_active: {
			type: require('./element.schema'),
			description: 'Whether the organization\'s record is still in active use.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/organization-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The kind(s) of organization that this is.'
		},
		name: {
			type: GraphQLString,
			description: 'A name associated with the organization.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A name associated with the organization.'
		},
		alias: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of alternate names that the organization is known as, or was known as in the past.'
		},
		_alias: {
			type: require('./element.schema'),
			description: 'A list of alternate names that the organization is known as, or was known as in the past.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail for the organization.'
		},
		address: {
			type: new GraphQLList(require('./address.schema')),
			description: 'An address for the organization.'
		},
		partOf: {
			type: require('./reference.schema'),
			description: 'The organization of which this organization forms a part.'
		},
		contact: {
			type: new GraphQLList(require('./organizationcontact.schema')),
			description: 'Contact for the organization for a certain purpose.'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Technical endpoints providing access to services operated for the organization.'
		}
	})
});
