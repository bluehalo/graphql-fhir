const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Contract.term.actor Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractTermActor_Input',
	description: 'List of actors participating in this Contract Provision.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		entity: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The actor assigned a role in this Contract Provision.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
		role: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Role played by the actor assigned this role in this Contract Provision.'
		}
	})
});
