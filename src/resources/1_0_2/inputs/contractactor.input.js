const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Contract.actor Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractActor_Input',
	description: 'List of Contract actors.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			entity: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'Who or what actors are assigned roles in this Contract.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
			role: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description: 'Role type of actors assigned roles in this Contract.',
			},
		}),
});
