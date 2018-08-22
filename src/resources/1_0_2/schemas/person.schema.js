const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let PersonResourceType = new GraphQLEnumType({
	name: 'PersonResourceType',
	values: {
		Person: { value: 'Person' }
	}
});

/**
 * @name exports
 * @summary Person Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Person',
	description: 'Base StructureDefinition for Person Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(PersonResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier for a person within a particular scope.'
		},
		name: {
			type: new GraphQLList(require('./humanname.schema')),
			description: 'A name associated with the person.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail for the person, e.g. a telephone number or an email address.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender.'
		},
		_gender: {
			type: require('./element.schema'),
			description: 'Administrative Gender.'
		},
		birthDate: {
			type: DateScalar,
			description: 'The birth date for the person.'
		},
		_birthDate: {
			type: require('./element.schema'),
			description: 'The birth date for the person.'
		},
		address: {
			type: new GraphQLList(require('./address.schema')),
			description: 'One or more addresses for the person.'
		},
		photo: {
			type: require('./attachment.schema'),
			description: 'An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.'
		},
		managingOrganization: {
			type: require('./reference.schema'),
			description: 'The organization that is the custodian of the person record.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this person\'s record is in active use.'
		},
		_active: {
			type: require('./element.schema'),
			description: 'Whether this person\'s record is in active use.'
		},
		link: {
			type: new GraphQLList(require('./personlink.schema')),
			description: 'Link to a resource that concerns the same actual person.'
		}
	})
});
