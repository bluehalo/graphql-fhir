const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CarePlanActivity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CarePlanActivity_Input',
	description: 'Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-outcome
		outcomeCodeableConcept: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).'
		},
		outcomeReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Details of the outcome or action resulting from the activity.  The reference to an \'event\' resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).'
		},
		progress: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Notes about the adherence/status/progress of the activity.'
		},
		reference: {
			type: require('./reference.input'),
			description: 'The details of the proposed activity represented in a specific resource.'
		},
		detail: {
			type: require('./careplanactivitydetail.input'),
			description: 'A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\'t know about specific resources such as procedure etc.'
		}
	})
});
