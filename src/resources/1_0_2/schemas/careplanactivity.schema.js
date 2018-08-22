const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CarePlanActivity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlanActivity',
	description: 'Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		actionResulting: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Resources that describe follow-on actions resulting from the plan, such as drug prescriptions, encounter records, appointments, etc.'
		},
		progress: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Notes about the adherence/status/progress of the activity.'
		},
		reference: {
			type: require('./reference.schema'),
			description: 'The details of the proposed activity represented in a specific resource.'
		},
		detail: {
			type: require('./careplanactivitydetail.schema'),
			description: 'A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\'t know about specific resources such as procedure etc.'
		}
	})
});
