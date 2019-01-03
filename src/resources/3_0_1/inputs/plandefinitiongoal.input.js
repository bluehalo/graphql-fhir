const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary PlanDefinition.goal Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PlanDefinitionGoal_Input',
	description:
		'Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-category
			category: {
				type: require('./codeableconcept.input'),
				description: 'Indicates a category the goal falls within.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
			description: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description:
					"Human-readable and/or coded description of a specific desired objective of care, such as 'control blood pressure' or 'negotiate an obstacle course' or 'dance with child at wedding'.",
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-priority
			priority: {
				type: require('./codeableconcept.input'),
				description:
					'Identifies the expected level of importance associated with reaching/sustaining the defined goal.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
			start: {
				type: require('./codeableconcept.input'),
				description:
					'The event after which the goal should begin being pursued.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
			addresses: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'Identifies problems, conditions, issues, or concerns the goal is intended to address.',
			},
			documentation: {
				type: new GraphQLList(require('./relatedartifact.input')),
				description:
					'Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.',
			},
			target: {
				type: new GraphQLList(require('./plandefinitiongoaltarget.input')),
				description: 'Indicates what should be done and within what timeframe.',
			},
		}),
});
