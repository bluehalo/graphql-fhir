const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EpisodeOfCare.statusHistory Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EpisodeOfCareStatusHistory_Input',
	description: 'The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/episode-of-care-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'planned | waitlist | active | onhold | finished | cancelled.'
		},
		_status: {
			type: require('./element.input'),
			description: 'planned | waitlist | active | onhold | finished | cancelled.'
		},
		period: {
			type: new GraphQLNonNull(require('./period.input')),
			description: 'The period during this EpisodeOfCare that the specific status applied.'
		}
	})
});
