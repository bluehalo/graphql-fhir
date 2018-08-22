const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ContractTermAgent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractTermAgent_Input',
	description: 'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The agent assigned a role in this Contract Provision.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
		role: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Role played by the agent assigned this role in the execution of this Contract Provision.'
		}
	})
});
