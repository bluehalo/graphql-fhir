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
		actionResulting: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Resources that describe follow-on actions resulting from the plan, such as drug prescriptions, encounter records, appointments, etc.'
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
