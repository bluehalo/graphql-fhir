const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary AuditEvent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEvent_Input',
	description: 'Base StructureDefinition for AuditEvent Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'AuditEvent_Enum_input',
					values: { AuditEvent: { value: 'AuditEvent' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-type
		type: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-sub-type
		subtype: {
			type: new GraphQLList(require('./coding.input.js')),
			description: 'Identifier for the category of event.',
		},
		_action: {
			type: require('./element.input.js'),
			description:
				'Indicator for type of action performed during the event that generated the audit.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-action
		action: {
			type: CodeScalar,
			description:
				'Indicator for type of action performed during the event that generated the audit.',
		},
		_recorded: {
			type: require('./element.input.js'),
			description: 'The time when the event occurred on the source.',
		},
		recorded: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The time when the event occurred on the source.',
		},
		_outcome: {
			type: require('./element.input.js'),
			description: 'Indicates whether the event succeeded or failed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-outcome
		outcome: {
			type: CodeScalar,
			description: 'Indicates whether the event succeeded or failed.',
		},
		_outcomeDesc: {
			type: require('./element.input.js'),
			description: 'A free text description of the outcome of the event.',
		},
		outcomeDesc: {
			type: GraphQLString,
			description: 'A free text description of the outcome of the event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purposeOfEvent: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The purposeOfUse (reason) that was used during the event being recorded.',
		},
		agent: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./auditeventagent.input.js')),
			),
			description:
				'An actor taking an active role in the event or activity that is logged.',
		},
		source: {
			type: new GraphQLNonNull(require('./auditeventsource.input.js')),
			description: 'The system that is reporting the event.',
		},
		entity: {
			type: new GraphQLList(require('./auditevententity.input.js')),
			description:
				'Specific instances of data or objects that have been accessed.',
		},
	}),
});
