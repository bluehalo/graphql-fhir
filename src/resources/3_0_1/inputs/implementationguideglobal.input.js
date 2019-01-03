const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ImplementationGuide.global Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImplementationGuideGlobal_Input',
	description: 'A set of profiles that all resources covered by this implementation guide must conform to.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of resource that all instances must conform to.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of resource that all instances must conform to.'
		},
		profile: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to the profile that all instances must conform to.'
		}
	})
});
