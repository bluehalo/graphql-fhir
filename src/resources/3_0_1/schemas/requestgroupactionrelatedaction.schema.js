const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary RequestGroup.action.relatedAction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RequestGroupActionRelatedAction',
	description:
		"A relationship to another action such as 'before' or '30-60 minutes after start of'.",
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			actionId: {
				type: new GraphQLNonNull(IdScalar),
				description: 'The element id of the action this is related to.',
			},
			_actionId: {
				type: require('./element.schema'),
				description: 'The element id of the action this is related to.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/action-relationship-type
			relationship: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'The relationship of this action to the related action.',
			},
			_relationship: {
				type: require('./element.schema'),
				description: 'The relationship of this action to the related action.',
			},
			offsetDuration: {
				type: require('./duration.schema'),
				description:
					'A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.',
			},
			offsetRange: {
				type: require('./range.schema'),
				description:
					'A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.',
			},
		}),
});
