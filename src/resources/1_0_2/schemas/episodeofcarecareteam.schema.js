const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary EpisodeOfCare.careTeam Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EpisodeOfCareCareTeam',
	description: 'The list of practitioners that may be facilitating this episode of care for specific purposes.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		role: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The role this team member is taking within this episode of care.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period of time this practitioner is performing some role within the episode of care.'
		},
		member: {
			type: require('./reference.schema'),
			description: 'The practitioner (or Organization) within the team.'
		}
	})
});
