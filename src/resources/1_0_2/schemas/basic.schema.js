const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let BasicResourceType = new GraphQLEnumType({
	name: 'BasicResourceType',
	values: {
		Basic: { value: 'Basic' }
	}
});

/**
 * @name exports
 * @summary Basic Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Basic',
	description: 'Base StructureDefinition for Basic Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(BasicResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier assigned to the resource for business purposes, outside the context of FHIR.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/basic-resource-type
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identifies the \'type\' of resource - equivalent to the resource name for other resources.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'Identifies the patient, practitioner, device or any other resource that is the \'focus\' of this resource.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Indicates who was responsible for creating the resource instance.'
		},
		created: {
			type: DateScalar,
			description: 'Identifies when the resource was first created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'Identifies when the resource was first created.'
		}
	})
});
