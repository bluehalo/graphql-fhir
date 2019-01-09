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
	description: 'Base StructureDefinition for DiagnosticReport Resource',
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
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'The local ID assigned to the report by the order filler, usually by the Information System of the diagnostic service provider.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the diagnostic report as a whole.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-report-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the diagnostic report as a whole.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-service-sections
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				'A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/report-codes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'A code or name that describes this diagnostic report.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The link to the health care event (encounter) when the order was made.',
		},
		_effectiveDateTime: {
			type: require('./element.input.js'),
			description:
				'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.',
		},
		effectiveDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.',
		},
		effectivePeriod: {
			type: new GraphQLNonNull(require('./period.input.js')),
			description:
				'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.',
		},
		_issued: {
			type: require('./element.input.js'),
			description:
				'The date and time that this version of the report was released from the source diagnostic service.',
		},
		issued: {
			type: new GraphQLNonNull(InstantScalar),
			description:
				'The date and time that this version of the report was released from the source diagnostic service.',
		},
		performer: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The diagnostic service that is responsible for issuing the report.',
		},
		request: {
			type: new GraphQLList(GraphQLString),
			description: 'Details concerning a test or procedure requested.',
		},
		specimen: {
			type: new GraphQLList(GraphQLString),
			description:
				'Details about the specimens on which this diagnostic report is based.',
		},
		result: {
			type: new GraphQLList(GraphQLString),
			description:
				"Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. 'atomic' results), or they can be grouping observations that include references to other members of the group (e.g. 'panels').",
		},
		imagingStudy: {
			type: new GraphQLList(GraphQLString),
			description:
				'One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.',
		},
		image: {
			type: new GraphQLList(require('./diagnosticreportimage.input.js')),
			description:
				'A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).',
		},
		_conclusion: {
			type: require('./element.input.js'),
			description:
				'Concise and clinically contextualized narrative interpretation of the diagnostic report.',
		},
		conclusion: {
			type: GraphQLString,
			description:
				'Concise and clinically contextualized narrative interpretation of the diagnostic report.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		codedDiagnosis: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Codes for the conclusion.',
		},
		presentedForm: {
			type: new GraphQLList(require('./attachment.input.js')),
			description:
				'Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.',
		},
	}),
});
