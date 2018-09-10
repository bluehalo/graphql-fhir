const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Contract.term.actor Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractTermActor',
	description: 'List of actors participating in this Contract Provision.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		entity: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The actor assigned a role in this Contract Provision.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
		role: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Role played by the actor assigned this role in this Contract Provision.'
		}
	})
});
