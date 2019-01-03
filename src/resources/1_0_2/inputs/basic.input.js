const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let BasicResourceInputType = new GraphQLEnumType({
	name: 'BasicResourceInputType',
	values: {
		Basic: { value: 'Basic' }
	}
});

/**
 * @name exports
 * @summary Basic Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Basic_Input',
	description: 'Base StructureDefinition for Basic Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(BasicResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier assigned to the resource for business purposes, outside the context of FHIR.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/basic-resource-type
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies the \'type\' of resource - equivalent to the resource name for other resources.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Identifies the patient, practitioner, device or any other resource that is the \'focus\' of this resource.'
		},
		author: {
			type: require('./reference.input'),
			description: 'Indicates who was responsible for creating the resource instance.'
		},
		created: {
			type: DateScalar,
			description: 'Identifies when the resource was first created.'
		},
		_created: {
			type: require('./element.input'),
			description: 'Identifies when the resource was first created.'
		}
	})
});
