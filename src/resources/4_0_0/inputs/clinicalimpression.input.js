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
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary ClinicalImpression Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClinicalImpression_Input',
	description:
		"A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called 'ClinicalImpression' rather than 'ClinicalAssessment' to avoid confusion with the recording of assessment tools such as Apgar score.",
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ClinicalImpression_Enum_input',
					values: { ClinicalImpression: { value: 'ClinicalImpression' } },
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
				'Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Identifies the workflow status of the assessment.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the workflow status of the assessment.',
		},
		statusReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'Captures the reason for the current state of the ClinicalImpression.',
		},
		code: {
			type: require('./codeableconcept.input.js'),
			description: 'Categorizes the type of clinical assessment performed.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.',
		},
		description: {
			type: GraphQLString,
			description:
				'A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The patient or group of individuals assessed as part of this record.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.',
		},
		_effectiveDateTime: {
			type: require('./element.input.js'),
			description:
				'The point in time or period over which the subject was assessed.',
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description:
				'The point in time or period over which the subject was assessed.',
		},
		effectivePeriod: {
			type: require('./period.input.js'),
			description:
				'The point in time or period over which the subject was assessed.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'Indicates when the documentation of the assessment was complete.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'Indicates when the documentation of the assessment was complete.',
		},
		assessor: {
			type: GraphQLString,
			description: 'The clinician performing the assessment.',
		},
		previous: {
			type: GraphQLString,
			description:
				"A reference to the last assessment that was conducted on this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.",
		},
		problem: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of the relevant problems/conditions for a patient.',
		},
		investigation: {
			type: new GraphQLList(
				require('./clinicalimpressioninvestigation.input.js'),
			),
			description:
				'One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.',
		},
		_protocol: {
			type: require('./element.input.js'),
			description:
				'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.',
		},
		protocol: {
			type: new GraphQLList(UriScalar),
			description:
				'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.',
		},
		_summary: {
			type: require('./element.input.js'),
			description: 'A text summary of the investigations and the diagnosis.',
		},
		summary: {
			type: GraphQLString,
			description: 'A text summary of the investigations and the diagnosis.',
		},
		finding: {
			type: new GraphQLList(require('./clinicalimpressionfinding.input.js')),
			description:
				'Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.',
		},
		prognosisCodeableConcept: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Estimate of likely outcome.',
		},
		prognosisReference: {
			type: new GraphQLList(GraphQLString),
			description: 'RiskAssessment expressing likely outcome.',
		},
		supportingInfo: {
			type: new GraphQLList(GraphQLString),
			description: 'Information supporting the clinical impression.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.',
		},
	}),
});
