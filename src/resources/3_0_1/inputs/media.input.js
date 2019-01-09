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
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Media Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Media_Input',
	description: 'Base StructureDefinition for Media Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Media_Enum_input',
					values: { Media: { value: 'Media' } },
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
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'A procedure that is fulfilled in whole or in part by the creation of this media.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'Whether the media is a photo (still image), an audio recording, or a video recording.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/digital-media-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Whether the media is a photo (still image), an audio recording, or a video recording.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/digital-media-subtype
		subtype: {
			type: require('./codeableconcept.input.js'),
			description:
				'Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/media-view
		view: {
			type: require('./codeableconcept.input.js'),
			description:
				'The name of the imaging view e.g. Lateral or Antero-posterior (AP).',
		},
		subject: {
			type: GraphQLString,
			description: 'Who/What this Media is a record of.',
		},
		context: {
			type: GraphQLString,
			description:
				'The encounter or episode of care that establishes the context for this media.',
		},
		_occurrenceDateTime: {
			type: require('./element.input.js'),
			description: 'The date and time(s) at which the media was collected.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date and time(s) at which the media was collected.',
		},
		occurrencePeriod: {
			type: require('./period.input.js'),
			description: 'The date and time(s) at which the media was collected.',
		},
		operator: {
			type: GraphQLString,
			description: 'The person who administered the collection of the image.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Describes why the event occurred in coded or textual form.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.input.js'),
			description:
				"Indicates the site on the subject's body where the media was collected (i.e. the target site).",
		},
		device: {
			type: GraphQLString,
			description: 'The device used to collect the media.',
		},
		_height: {
			type: require('./element.input.js'),
			description: 'Height of the image in pixels (photo/video).',
		},
		height: {
			type: PositiveIntScalar,
			description: 'Height of the image in pixels (photo/video).',
		},
		_width: {
			type: require('./element.input.js'),
			description: 'Width of the image in pixels (photo/video).',
		},
		width: {
			type: PositiveIntScalar,
			description: 'Width of the image in pixels (photo/video).',
		},
		_frames: {
			type: require('./element.input.js'),
			description:
				'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.',
		},
		frames: {
			type: PositiveIntScalar,
			description:
				'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.',
		},
		_duration: {
			type: require('./element.input.js'),
			description:
				'The duration of the recording in seconds - for audio and video.',
		},
		duration: {
			type: UnsignedIntScalar,
			description:
				'The duration of the recording in seconds - for audio and video.',
		},
		content: {
			type: new GraphQLNonNull(require('./attachment.input.js')),
			description:
				'The actual content of the media - inline or by direct reference to the media source file.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Comments made about the media by the performer, subject or other participants.',
		},
	}),
});
