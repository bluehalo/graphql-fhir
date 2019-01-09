const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary RequestGroupaction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RequestGroupaction',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_prefix: {
			type: require('./element.schema.js'),
			description: 'A user-visible prefix for the action.',
		},
		prefix: {
			type: GraphQLString,
			description: 'A user-visible prefix for the action.',
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
				'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.',
		},
		textEquivalent: {
			type: GraphQLString,
			description:
				'A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly the action should be addressed with respect to other actions.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the action should be addressed with respect to other actions.',
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.',
		},
		documentation: {
			type: new GraphQLList(require('./relatedartifact.schema.js')),
			description:
				'Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.',
		},
		condition: {
			type: new GraphQLList(require('./requestgroupactioncondition.schema.js')),
			description:
				'An expression that describes applicability criteria, or start/stop conditions for the action.',
		},
		relatedAction: {
			type: new GraphQLList(
				require('./requestgroupactionrelatedaction.schema.js'),
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
		timingAge: {
			type: require('./age.schema.js'),
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
				new GraphQLUnionType({
					name: 'RequestGroupactionparticipant_participant_Union',
					description:
						'The participant that should perform or be responsible for this action.',
					types: () => [
						require('./patient.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./relatedperson.schema.js'),
						require('./device.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description:
				'The participant that should perform or be responsible for this action.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'The type of action to perform (create, update, remove).',
		},
		_groupingBehavior: {
			type: require('./element.schema.js'),
			description:
				'Defines the grouping behavior for the action and its children.',
		},
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
		selectionBehavior: {
			type: CodeScalar,
			description:
				'Defines the selection behavior for the action and its children.',
		},
		_requiredBehavior: {
			type: require('./element.schema.js'),
			description: 'Defines expectations around whether an action is required.',
		},
		requiredBehavior: {
			type: CodeScalar,
			description: 'Defines expectations around whether an action is required.',
		},
		_precheckBehavior: {
			type: require('./element.schema.js'),
			description: 'Defines whether the action should usually be preselected.',
		},
		precheckBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action should usually be preselected.',
		},
		_cardinalityBehavior: {
			type: require('./element.schema.js'),
			description: 'Defines whether the action can be selected multiple times.',
		},
		cardinalityBehavior: {
			type: CodeScalar,
			description: 'Defines whether the action can be selected multiple times.',
		},
		resource: {
			type: new GraphQLUnionType({
				name: 'RequestGroupactionresource_resource_Union',
				description:
					'The resource that is the target of the action (e.g. CommunicationRequest).',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'The resource that is the target of the action (e.g. CommunicationRequest).',
		},
	}),
});
