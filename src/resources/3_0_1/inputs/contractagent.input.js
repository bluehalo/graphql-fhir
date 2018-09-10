const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Contract.agent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractAgent_Input',
	description: 'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Who or what parties are assigned roles in this Contract.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
		role: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Role type of agent assigned roles in this Contract.'
		}
	})
});
