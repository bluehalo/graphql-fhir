const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Contract.actor Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractActor',
	description: 'List of Contract actors.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		entity: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Who or what actors are assigned roles in this Contract.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
		role: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Role type of actors assigned roles in this Contract.'
		}
	})
});
