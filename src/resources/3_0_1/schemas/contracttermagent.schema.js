const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ContractTermAgent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractTermAgent',
	description: 'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The agent assigned a role in this Contract Provision.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
		role: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Role played by the agent assigned this role in the execution of this Contract Provision.'
		}
	})
});
