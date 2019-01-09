const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary PlanDefinitionaction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PlanDefinitionaction',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_label: {
			type: require('./element.schema.js'),
			description: 'A user-visible label for the action.',
		},
		label: {
			type: GraphQLString,
			description: 'A user-visible label for the action.',
		},
		_title: {
			type: require('./element.schema.js'),
			description: 'The title of the action displayed to a user.',
		},
		title: {
			type: GraphQLString,
			description: 'The title of the action displayed to a user.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A short description of the action used to provide a summary to display to the user.',
		},
		description: {
			type: GraphQLString,
			description:
				'A short description of the action used to provide a summary to display to the user.',
		},
		_textEquivalent: {
			type: require('./element.schema.js'),
			description:
				'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.',
		},
		textEquivalent: {
			type: GraphQLString,
			description:
				'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.',
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.',
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A description of why this action is necessary or appropriate.',
		},
		documentation: {
			type: new GraphQLList(require('./relatedartifact.schema.js')),
			description:
				'Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.',
		},
		_goalId: {
			type: require('./element.schema.js'),
			description:
				'Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.',
		},
		goalId: {
			type: new GraphQLList(IdScalar),
			description:
				'Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.',
		},
		triggerDefinition: {
			type: new GraphQLList(require('./triggerdefinition.schema.js')),
			description: 'A description of when the action should be triggered.',
		},
		condition: {
			type: new GraphQLList(
				require('./plandefinitionactioncondition.schema.js'),
			),
			description:
				'An expression that describes applicability criteria, or start/stop conditions for the action.',
		},
		input: {
			type: new GraphQLList(require('./datarequirement.schema.js')),
			description: 'Defines input data requirements for the action.',
		},
		output: {
			type: new GraphQLList(require('./datarequirement.schema.js')),
			description: 'Defines the outputs of the action, if any.',
		},
		relatedAction: {
			type: new GraphQLList(
				require('./plandefinitionactionrelatedaction.schema.js'),
			),
			description:
				"A relationship to another action such as 'before' or '30-60 minutes after start of'.",
		},
		_timingDateTime: {
			type: require('./element.schema.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingDateTime: {
			type: DateTimeScalar,
			description:
				'An optional value describing when the action should be performed.',
		},
		timingPeriod: {
			type: require('./period.schema.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingDuration: {
			type: require('./duration.schema.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingRange: {
			type: require('./range.schema.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		timingTiming: {
			type: require('./timing.schema.js'),
			description:
				'An optional value describing when the action should be performed.',
		},
		participant: {
			type: new GraphQLList(
				require('./plandefinitionactionparticipant.schema.js'),
			),
			description:
				'Indicates who should participate in performing the action described.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-type
		type: {
			type: require('./coding.schema.js'),
			description: 'The type of action to perform (create, update, remove).',
		},
		_groupingBehavior: {
			type: require('./element.schema.js'),
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
			type: require('./element.schema.js'),
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
			type: require('./element.schema.js'),
			description: 'Defines the requiredness behavior for the action.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-required-behavior
		requiredBehavior: {
			type: CodeScalar,
			description: 'Defines the requiredness behavior for the action.',
		},
		_precheckBehavior: {
			type: require('./element.schema.js'),
			description: 'Defines whether the action should usually be preselected.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-precheck-behavior
		precheckBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action should usually be preselected.',
		},
		_cardinalityBehavior: {
			type: require('./element.schema.js'),
			description: 'Defines whether the action can be selected multiple times.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/action-cardinality-behavior
		cardinalityBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action can be selected multiple times.',
		},
		definition: {
			type: new GraphQLUnionType({
				name: 'PlanDefinitionactiondefinition_definition_Union',
				description:
					'A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.',
				types: () => [
					require('./activitydefinition.schema.js'),
					require('./plandefinition.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'ActivityDefinition') {
						return require('./activitydefinition.schema.js');
					}
					if (data && data.resourceType === 'PlanDefinition') {
						return require('./plandefinition.schema.js');
					}
				},
			}),
			description:
				'A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.',
		},
		transform: {
			type: new GraphQLUnionType({
				name: 'PlanDefinitionactiontransform_transform_Union',
				description:
					'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.',
				types: () => [require('./structuremap.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'StructureMap') {
						return require('./structuremap.schema.js');
					}
				},
			}),
			description:
				'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.',
		},
		dynamicValue: {
			type: new GraphQLList(
				require('./plandefinitionactiondynamicvalue.schema.js'),
			),
			description:
				"Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.",
		},
	}),
});
