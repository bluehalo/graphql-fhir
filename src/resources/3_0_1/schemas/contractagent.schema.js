const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ContractAgent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractAgent',
	description: 'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Who or what parties are assigned roles in this Contract.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-actorrole
		role: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Role type of agent assigned roles in this Contract.'
		}
	})
});
