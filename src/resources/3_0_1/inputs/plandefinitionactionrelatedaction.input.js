const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PlanDefinition.action.relatedAction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PlanDefinitionActionRelatedAction_Input',
	description: 'A relationship to another action such as \'before\' or \'30-60 minutes after start of\'.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		actionId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The element id of the related action.'
		},
		_actionId: {
			type: require('./element.input'),
			description: 'The element id of the related action.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-relationship-type
		relationship: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The relationship of this action to the related action.'
		},
		_relationship: {
			type: require('./element.input'),
			description: 'The relationship of this action to the related action.'
		},
		offsetDuration: {
			type: require('./duration.input'),
			description: 'A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.'
		},
		offsetRange: {
			type: require('./range.input'),
			description: 'A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.'
		}
	})
});
