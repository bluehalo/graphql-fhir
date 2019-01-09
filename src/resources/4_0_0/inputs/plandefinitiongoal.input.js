const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary PlanDefinitiongoal Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PlanDefinitiongoal_Input',
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
		category: {
			type: require('./codeableconcept.input.js'),
			description: 'Indicates a category the goal falls within.',
		},
		description: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"Human-readable and/or coded description of a specific desired objective of care, such as 'control blood pressure' or 'negotiate an obstacle course' or 'dance with child at wedding'.",
		},
		priority: {
			type: require('./codeableconcept.input.js'),
			description:
				'Identifies the expected level of importance associated with reaching/sustaining the defined goal.',
		},
		start: {
			type: require('./codeableconcept.input.js'),
			description: 'The event after which the goal should begin being pursued.',
		},
		addresses: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Identifies problems, conditions, issues, or concerns the goal is intended to address.',
		},
		documentation: {
			type: new GraphQLList(require('./relatedartifact.input.js')),
			description:
				'Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.',
		},
		target: {
			type: new GraphQLList(require('./plandefinitiongoaltarget.input.js')),
			description: 'Indicates what should be done and within what timeframe.',
		},
	}),
});
