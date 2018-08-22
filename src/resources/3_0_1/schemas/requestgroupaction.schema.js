const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary RequestGroupAction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RequestGroupAction',
	description: 'The actions, if any, produced by the evaluation of the artifact.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		label: {
			type: GraphQLString,
			description: 'A user-visible label for the action.'
		},
		_label: {
			type: require('./element.schema'),
			description: 'A user-visible label for the action.'
		},
		title: {
			type: GraphQLString,
			description: 'The title of the action displayed to a user.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'The title of the action displayed to a user.'
		},
		description: {
			type: GraphQLString,
			description: 'A short description of the action used to provide a summary to display to the user.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A short description of the action used to provide a summary to display to the user.'
		},
		textEquivalent: {
			type: GraphQLString,
			description: 'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.'
		},
		_textEquivalent: {
			type: require('./element.schema'),
			description: 'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.'
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.'
		},
		documentation: {
			type: new GraphQLList(require('./relatedartifact.schema')),
			description: 'Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.'
		},
		condition: {
			type: new GraphQLList(require('./requestgroupactioncondition.schema')),
			description: 'An expression that describes applicability criteria, or start/stop conditions for the action.'
		},
		relatedAction: {
			type: new GraphQLList(require('./requestgroupactionrelatedaction.schema')),
			description: 'A relationship to another action such as \'before\' or \'30-60 minutes after start of\'.'
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'An optional value describing when the action should be performed.'
		},
		_timingDateTime: {
			type: require('./element.schema'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingPeriod: {
			type: require('./period.schema'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingDuration: {
			type: require('./duration.schema'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingRange: {
			type: require('./range.schema'),
			description: 'An optional value describing when the action should be performed.'
		},
		timingTiming: {
			type: require('./timing.schema'),
			description: 'An optional value describing when the action should be performed.'
		},
		participant: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The participant that should perform or be responsible for this action.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-type
		type: {
			type: require('./coding.schema'),
			description: 'The type of action to perform (create, update, remove).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-grouping-behavior
		groupingBehavior: {
			type: CodeScalar,
			description: 'Defines the grouping behavior for the action and its children.'
		},
		_groupingBehavior: {
			type: require('./element.schema'),
			description: 'Defines the grouping behavior for the action and its children.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-selection-behavior
		selectionBehavior: {
			type: CodeScalar,
			description: 'Defines the selection behavior for the action and its children.'
		},
		_selectionBehavior: {
			type: require('./element.schema'),
			description: 'Defines the selection behavior for the action and its children.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-required-behavior
		requiredBehavior: {
			type: CodeScalar,
			description: 'Defines the requiredness behavior for the action.'
		},
		_requiredBehavior: {
			type: require('./element.schema'),
			description: 'Defines the requiredness behavior for the action.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-precheck-behavior
		precheckBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action should usually be preselected.'
		},
		_precheckBehavior: {
			type: require('./element.schema'),
			description: 'Defines whether the action should usually be preselected.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-cardinality-behavior
		cardinalityBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action can be selected multiple times.'
		},
		_cardinalityBehavior: {
			type: require('./element.schema'),
			description: 'Defines whether the action can be selected multiple times.'
		},
		resource: {
			type: require('./reference.schema'),
			description: 'The resource that is the target of the action (e.g. CommunicationRequest).'
		}
	})
});
