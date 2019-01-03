const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Immunization.reaction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationReaction',
	description:
		'Categorical data indicating that an adverse event is associated in time to an immunization.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			date: {
				type: DateTimeScalar,
				description: 'Date of reaction to the immunization.',
			},
			_date: {
				type: require('./element.schema'),
				description: 'Date of reaction to the immunization.',
			},
			detail: {
				type: require('./reference.schema'),
				description: 'Details of the reaction.',
			},
			reported: {
				type: GraphQLBoolean,
				description: 'Self-reported indicator.',
			},
			_reported: {
				type: require('./element.schema'),
				description: 'Self-reported indicator.',
			},
		}),
});
