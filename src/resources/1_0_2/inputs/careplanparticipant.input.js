const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CarePlan.participant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CarePlanParticipant_Input',
	description: 'Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'Indicates specific responsibility of an individual within the care plan; e.g. \'Primary physician\', \'Team coordinator\', \'Caregiver\', etc.'
		},
		member: {
			type: require('./reference.input'),
			description: 'The specific person or organization who is participating/expected to participate in the care plan.'
		}
	})
});
