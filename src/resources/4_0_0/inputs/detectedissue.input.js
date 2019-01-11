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
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary DetectedIssue Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DetectedIssue_Input',
	description:
		'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DetectedIssue_Enum_input',
					values: { DetectedIssue: { value: 'DetectedIssue' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Business identifier associated with the detected issue record.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Indicates the status of the detected issue.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the status of the detected issue.',
		},
		code: {
			type: require('./codeableconcept.input.js'),
			description: 'Identifies the general type of issue identified.',
		},
		_severity: {
			type: require('./element.input.js'),
			description:
				'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.',
		},
		severity: {
			type: CodeScalar,
			description:
				'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.',
		},
		patient: {
			type: GraphQLString,
			description:
				'Indicates the patient whose record the detected issue is associated with.',
		},
		_identifiedDateTime: {
			type: require('./element.input.js'),
			description:
				'The date or period when the detected issue was initially identified.',
		},
		identifiedDateTime: {
			type: DateTimeScalar,
			description:
				'The date or period when the detected issue was initially identified.',
		},
		identifiedPeriod: {
			type: require('./period.input.js'),
			description:
				'The date or period when the detected issue was initially identified.',
		},
		author: {
			type: GraphQLString,
			description:
				'Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.',
		},
		implicated: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates the resource representing the current activity or proposed activity that is potentially problematic.',
		},
		evidence: {
			type: new GraphQLList(require('./detectedissueevidence.input.js')),
			description:
				'Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.',
		},
		_detail: {
			type: require('./element.input.js'),
			description: 'A textual explanation of the detected issue.',
		},
		detail: {
			type: GraphQLString,
			description: 'A textual explanation of the detected issue.',
		},
		_reference: {
			type: require('./element.input.js'),
			description:
				'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.',
		},
		reference: {
			type: UriScalar,
			description:
				'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.',
		},
		mitigation: {
			type: new GraphQLList(require('./detectedissuemitigation.input.js')),
			description:
				'Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.',
		},
	}),
});
