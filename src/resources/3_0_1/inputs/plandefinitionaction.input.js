const IdScalar = require('../scalars/id.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PlanDefinitionAction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PlanDefinitionAction_Input',
	description: 'An action to be taken as part of the plan.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		label: {
			type: GraphQLString,
			description: 'A user-visible label for the action.'
		},
		_label: {
			type: require('./element.input'),
			description: 'A user-visible label for the action.'
		},
		title: {
			type: GraphQLString,
			description: 'The title of the action displayed to a user.'
		},
		_title: {
			type: require('./element.input'),
			description: 'The title of the action displayed to a user.'
		},
		description: {
			type: GraphQLString,
			description: 'A short description of the action used to provide a summary to display to the user.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A short description of the action used to provide a summary to display to the user.'
		},
		textEquivalent: {
			type: GraphQLString,
			description: 'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.'
		},
		_textEquivalent: {
			type: require('./element.input'),
			description: 'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.'
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.'
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A description of why this action is necessary or appropriate.'
		},
		documentation: {
			type: new GraphQLList(require('./relatedartifact.input')),
			description: 'Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.'
		},
		goalId: {
			type: new GraphQLList(IdScalar),
			description: 'Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.'
		},
		_goalId: {
			type: require('./element.input'),
			description: 'Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.'
		},
		triggerDefinition: {
			type: new GraphQLList(require('./triggerdefinition.input')),
			description: 'A description of when the action should be triggered.'
		},
		condition: {
			type: new GraphQLList(require('./plandefinitionactioncondition.input')),
			description: 'An expression that describes applicability criteria, or start/stop conditions for the action.'
		},
		input: {
			type: new GraphQLList(require('./datarequirement.input')),
			description: 'Defines input data requirements for the action.'
		},
		output: {
			type: new GraphQLList(require('./datarequirement.input')),
			description: 'Defines the outputs of the action, if any.'
		},
		relatedAction: {
			type: new GraphQLList(require('./plandefinitionactionrelatedaction.input')),
			description: 'A relationship to another action such as \'before\' or \'30-60 minutes after start of\'.'
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'An optional value describing when the action should be performed.'
		},
		_timingDateTime: {
			type: require('./element.input'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingPeriod: {
			type: require('./period.input'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingDuration: {
			type: require('./duration.input'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingRange: {
			type: require('./range.input'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingTiming: {
			type: require('./timing.input'),
			description: 'An optional value describing when the action should be performed.'
		},
		participant: {
			type: new GraphQLList(require('./plandefinitionactionparticipant.input')),
			description: 'Indicates who should participate in performing the action described.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/action-type
		type: {
			type: require('./coding.input'),
			description: 'The type of action to perform (create, update, remove).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/action-grouping-behavior
		groupingBehavior: {
			type: CodeScalar,
			description: 'Defines the grouping behavior for the action and its children.'
		},
		_groupingBehavior: {
			type: require('./element.input'),
			description: 'Defines the grouping behavior for the action and its children.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/action-selection-behavior
		selectionBehavior: {
			type: CodeScalar,
			description: 'Defines the selection behavior for the action and its children.'
		},
		_selectionBehavior: {
			type: require('./element.input'),
			description: 'Defines the selection behavior for the action and its children.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/action-required-behavior
		requiredBehavior: {
			type: CodeScalar,
			description: 'Defines the requiredness behavior for the action.'
		},
		_requiredBehavior: {
			type: require('./element.input'),
			description: 'Defines the requiredness behavior for the action.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/action-precheck-behavior
		precheckBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action should usually be preselected.'
		},
		_precheckBehavior: {
			type: require('./element.input'),
			description: 'Defines whether the action should usually be preselected.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/action-cardinality-behavior
		cardinalityBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action can be selected multiple times.'
		},
		_cardinalityBehavior: {
			type: require('./element.input'),
			description: 'Defines whether the action can be selected multiple times.'
		},
		definition: {
			type: require('./reference.input'),
			description: 'A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.'
		},
		transform: {
			type: require('./reference.input'),
			description: 'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.'
		},
		dynamicValue: {
			type: new GraphQLList(require('./plandefinitionactiondynamicvalue.input')),
			description: 'Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.'
		}
	})
});
