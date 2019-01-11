const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary PlanDefinitionaction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PlanDefinitionaction_Input',
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
		_label: {
			type: require('./element.input.js'),
			description: 'A user-visible label for the action.',
		},
		label: {
			type: GraphQLString,
			description: 'A user-visible label for the action.',
		},
		_title: {
			type: require('./element.input.js'),
			description: 'The title of the action displayed to a user.',
		},
		title: {
			type: GraphQLString,
			description: 'The title of the action displayed to a user.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A short description of the action used to provide a summary to display to the user.',
		},
		description: {
			type: GraphQLString,
			description:
				'A short description of the action used to provide a summary to display to the user.',
		},
		_textEquivalent: {
			type: require('./element.input.js'),
			description:
				'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.',
		},
		textEquivalent: {
			type: GraphQLString,
			description:
				'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.',
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.',
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A description of why this action is necessary or appropriate.',
		},
		documentation: {
			type: new GraphQLList(require('./relatedartifact.input.js')),
			description:
				'Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.',
		},
		_goalId: {
			type: require('./element.input.js'),
			description:
				'Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.',
		},
		goalId: {
			type: new GraphQLList(IdScalar),
			description:
				'Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.',
		},
		triggerDefinition: {
			type: new GraphQLList(require('./triggerdefinition.input.js')),
			description: 'A description of when the action should be triggered.',
		},
		condition: {
			type: new GraphQLList(
				require('./plandefinitionactioncondition.input.js'),
			),
			description:
				'An expression that describes applicability criteria, or start/stop conditions for the action.',
		},
		input: {
			type: new GraphQLList(require('./datarequirement.input.js')),
			description: 'Defines input data requirements for the action.',
		},
		output: {
			type: new GraphQLList(require('./datarequirement.input.js')),
			description: 'Defines the outputs of the action, if any.',
		},
		relatedAction: {
			type: new GraphQLList(
				require('./plandefinitionactionrelatedaction.input.js'),
			),
			description:
				"A relationship to another action such as 'before' or '30-60 minutes after start of'.",
		},
		_timingDateTime: {
			type: require('./element.input.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingDateTime: {
			type: DateTimeScalar,
			description:
				'An optional value describing when the action should be performed.',
		},
		timingPeriod: {
			type: require('./period.input.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingDuration: {
			type: require('./duration.input.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingRange: {
			type: require('./range.input.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingTiming: {
			type: require('./timing.input.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		participant: {
			type: new GraphQLList(
				require('./plandefinitionactionparticipant.input.js'),
			),
			description:
				'Indicates who should participate in performing the action described.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-type
		type: {
			type: require('./coding.input.js'),
			description: 'The type of action to perform (create, update, remove).',
		},
		_groupingBehavior: {
			type: require('./element.input.js'),
			description:
				'Defines the grouping behavior for the action and its children.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-grouping-behavior
		groupingBehavior: {
			type: CodeScalar,
			description:
				'Defines the grouping behavior for the action and its children.',
		},
		_selectionBehavior: {
			type: require('./element.input.js'),
			description:
				'Defines the selection behavior for the action and its children.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-selection-behavior
		selectionBehavior: {
			type: CodeScalar,
			description:
				'Defines the selection behavior for the action and its children.',
		},
		_requiredBehavior: {
			type: require('./element.input.js'),
			description: 'Defines the requiredness behavior for the action.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-required-behavior
		requiredBehavior: {
			type: CodeScalar,
			description: 'Defines the requiredness behavior for the action.',
		},
		_precheckBehavior: {
			type: require('./element.input.js'),
			description: 'Defines whether the action should usually be preselected.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-precheck-behavior
		precheckBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action should usually be preselected.',
		},
		_cardinalityBehavior: {
			type: require('./element.input.js'),
			description: 'Defines whether the action can be selected multiple times.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-cardinality-behavior
		cardinalityBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action can be selected multiple times.',
		},
		definition: {
			type: GraphQLString,
			description:
				'A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.',
		},
		transform: {
			type: GraphQLString,
			description:
				'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.',
		},
		dynamicValue: {
			type: new GraphQLList(
				require('./plandefinitionactiondynamicvalue.input.js'),
			),
			description:
				"Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.",
		},
	}),
});
