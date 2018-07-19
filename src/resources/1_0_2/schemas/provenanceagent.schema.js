const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProvenanceAgent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProvenanceAgent',
	description: 'An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/provenance-agent-role
		role: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The function of the agent with respect to the activity.'
		},
		actor: {
			type: require('./reference.schema'),
			description: 'The individual, device or organization that participated in the event.'
		},
		userId: {
			type: require('./identifier.schema'),
			description: 'The identity of the agent as known by the authorization system.'
		},
		relatedAgent: {
			type: new GraphQLList(require('./provenanceagentrelatedagent.schema')),
			description: 'A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another\'s behest.'
		}
	})
});
