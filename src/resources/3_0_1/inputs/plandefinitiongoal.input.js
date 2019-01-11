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
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-category
		category: {
			type: require('./codeableconcept.input.js'),
			description: 'Indicates a category the goal falls within.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		description: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"Human-readable and/or coded description of a specific desired objective of care, such as 'control blood pressure' or 'negotiate an obstacle course' or 'dance with child at wedding'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-priority
		priority: {
			type: require('./codeableconcept.input.js'),
			description:
				'Identifies the expected level of importance associated with reaching/sustaining the defined goal.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		start: {
			type: require('./codeableconcept.input.js'),
			description: 'The event after which the goal should begin being pursued.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
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
