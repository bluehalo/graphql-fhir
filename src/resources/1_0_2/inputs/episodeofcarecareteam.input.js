const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EpisodeOfCare.careTeam Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EpisodeOfCareCareTeam_Input',
	description: 'The list of practitioners that may be facilitating this episode of care for specific purposes.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		role: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The role this team member is taking within this episode of care.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period of time this practitioner is performing some role within the episode of care.'
		},
		member: {
			type: require('./reference.input'),
			description: 'The practitioner (or Organization) within the team.'
		}
	})
});
