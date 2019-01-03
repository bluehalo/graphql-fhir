const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary EpisodeOfCare.statusHistory Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EpisodeOfCareStatusHistory',
	description:
		'The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/episode-of-care-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'planned | waitlist | active | onhold | finished | cancelled.',
			},
			_status: {
				type: require('./element.schema'),
				description:
					'planned | waitlist | active | onhold | finished | cancelled.',
			},
			period: {
				type: new GraphQLNonNull(require('./period.schema')),
				description:
					'The period during this EpisodeOfCare that the specific status applied.',
			},
		}),
});
