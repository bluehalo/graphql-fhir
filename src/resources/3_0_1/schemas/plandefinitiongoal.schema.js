const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PlanDefinitionGoal Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PlanDefinitionGoal',
	description: 'Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-category
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates a category the goal falls within.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		description: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Human-readable and/or coded description of a specific desired objective of care, such as \'control blood pressure\' or \'negotiate an obstacle course\' or \'dance with child at wedding\'.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-priority
		priority: {
			type: require('./codeableconcept.schema'),
			description: 'Identifies the expected level of importance associated with reaching/sustaining the defined goal.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		start: {
			type: require('./codeableconcept.schema'),
			description: 'The event after which the goal should begin being pursued.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		addresses: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Identifies problems, conditions, issues, or concerns the goal is intended to address.'
		},
		documentation: {
			type: new GraphQLList(require('./relatedartifact.schema')),
			description: 'Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.'
		},
		target: {
			type: new GraphQLList(require('./plandefinitiongoaltarget.schema')),
			description: 'Indicates what should be done and within what timeframe.'
		}
	})
});
