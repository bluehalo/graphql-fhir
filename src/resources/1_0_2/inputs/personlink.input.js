const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Person.link Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PersonLink_Input',
	description: 'Link to a resource that concerns the same actual person.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		target: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The resource to which this actual person is associated.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/identity-assuranceLevel
		assurance: {
			type: CodeScalar,
			description: 'Level of assurance that this link is actually associated with the target resource.'
		},
		_assurance: {
			type: require('./element.input'),
			description: 'Level of assurance that this link is actually associated with the target resource.'
		}
	})
});
