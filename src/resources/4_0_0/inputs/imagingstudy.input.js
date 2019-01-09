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
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary ImagingStudy Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudy_Input',
	description:
		'Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ImagingStudy_Enum_input',
					values: { ImagingStudy: { value: 'ImagingStudy' } },
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
				'Identifiers for the ImagingStudy such as DICOM Study Instance UID, and Accession Number.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The current state of the ImagingStudy.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the ImagingStudy.',
		},
		modality: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The subject, typically a patient, of the imaging study.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The healthcare event (e.g. a patient and healthcare provider interaction) during which this ImagingStudy is made.',
		},
		_started: {
			type: require('./element.input.js'),
			description: 'Date and time the study started.',
		},
		started: {
			type: DateTimeScalar,
			description: 'Date and time the study started.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'A list of the diagnostic requests that resulted in this imaging study being performed.',
		},
		referrer: {
			type: GraphQLString,
			description: 'The requesting/referring physician.',
		},
		interpreter: {
			type: new GraphQLList(GraphQLString),
			description:
				'Who read the study and interpreted the images or other content.',
		},
		endpoint: {
			type: new GraphQLList(GraphQLString),
			description:
				'The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.connectionType.',
		},
		_numberOfSeries: {
			type: require('./element.input.js'),
			description:
				'Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.',
		},
		numberOfSeries: {
			type: UnsignedIntScalar,
			description:
				'Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.',
		},
		_numberOfInstances: {
			type: require('./element.input.js'),
			description:
				'Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.',
		},
		numberOfInstances: {
			type: UnsignedIntScalar,
			description:
				'Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.',
		},
		procedureReference: {
			type: GraphQLString,
			description: 'The procedure which this ImagingStudy was part of.',
		},
		procedureCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The code for the performed procedure type.',
		},
		location: {
			type: GraphQLString,
			description:
				'The principal physical location where the ImagingStudy was performed.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Description of clinical condition indicating why the ImagingStudy was requested.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates another resource whose existence justifies this Study.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.',
		},
		description: {
			type: GraphQLString,
			description:
				'The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.',
		},
		series: {
			type: new GraphQLList(require('./imagingstudyseries.input.js')),
			description:
				'Each study has one or more series of images or other content.',
		},
	}),
});
