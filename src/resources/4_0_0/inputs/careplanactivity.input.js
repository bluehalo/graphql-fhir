const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CarePlanactivity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CarePlanactivity_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		outcomeCodeableConcept: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).',
		},
		outcomeReference: {
			type: new GraphQLList(GraphQLString),
			description:
				"Details of the outcome or action resulting from the activity.  The reference to an 'event' resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).",
		},
		progress: {
			type: new GraphQLList(require('./annotation.input.js')),
			description: 'Notes about the adherence/status/progress of the activity.',
		},
		reference: {
			type: GraphQLString,
			description:
				'The details of the proposed activity represented in a specific resource.',
		},
		detail: {
			type: require('./careplanactivitydetail.input.js'),
			description:
				"A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.",
		},
	}),
});
