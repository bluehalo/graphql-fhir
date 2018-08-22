const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProvenanceAgent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProvenanceAgent_Input',
	description: 'An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/provenance-agent-role
		role: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The function of the agent with respect to the activity.'
		},
		actor: {
			type: require('./reference.input'),
			description: 'The individual, device or organization that participated in the event.'
		},
		userId: {
			type: require('./identifier.input'),
			description: 'The identity of the agent as known by the authorization system.'
		},
		relatedAgent: {
			type: new GraphQLList(require('./provenanceagentrelatedagent.input')),
			description: 'A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another\'s behest.'
		}
	})
});
