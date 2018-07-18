const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Basic Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Basic',
	description: 'Base StructureDefinition for Basic Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
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
		created: {
			type: DateScalar,
			description: 'Identifies when the resource was first created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'Identifies when the resource was first created.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Indicates who was responsible for creating the resource instance.'
		}
	})
});
