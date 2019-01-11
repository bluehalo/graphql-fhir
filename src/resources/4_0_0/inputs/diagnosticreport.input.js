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
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary DiagnosticReport Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticReport_Input',
	description:
		'The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DiagnosticReport_Enum_input',
					values: { DiagnosticReport: { value: 'DiagnosticReport' } },
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
				'Identifiers assigned to this report by the performer or other systems.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description: 'Details concerning a service requested.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the diagnostic report.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the diagnostic report.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.',
		},
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'A code or name that describes this diagnostic report.',
		},
		subject: {
			type: GraphQLString,
			description:
				'The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.',
		},
		_effectiveDateTime: {
			type: require('./element.input.js'),
			description:
				'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.',
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description:
				'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.',
		},
		effectivePeriod: {
			type: require('./period.input.js'),
			description:
				'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.',
		},
		_issued: {
			type: require('./element.input.js'),
			description:
				'The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified.',
		},
		issued: {
			type: InstantScalar,
			description:
				'The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified.',
		},
		performer: {
			type: new GraphQLList(GraphQLString),
			description:
				'The diagnostic service that is responsible for issuing the report.',
		},
		resultsInterpreter: {
			type: new GraphQLList(GraphQLString),
			description:
				"The practitioner or organization that is responsible for the report's conclusions and interpretations.",
		},
		specimen: {
			type: new GraphQLList(GraphQLString),
			description:
				'Details about the specimens on which this diagnostic report is based.',
		},
		result: {
			type: new GraphQLList(GraphQLString),
			description:
				'[Observations](observation.html)  that are part of this diagnostic report.',
		},
		imagingStudy: {
			type: new GraphQLList(GraphQLString),
			description:
				'One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.',
		},
		media: {
			type: new GraphQLList(require('./diagnosticreportmedia.input.js')),
			description:
				'A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).',
		},
		_conclusion: {
			type: require('./element.input.js'),
			description:
				'Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.',
		},
		conclusion: {
			type: GraphQLString,
			description:
				'Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.',
		},
		conclusionCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.',
		},
		presentedForm: {
			type: new GraphQLList(require('./attachment.input.js')),
			description:
				'Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.',
		},
	}),
});
