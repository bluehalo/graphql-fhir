const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Media Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Media_Input',
	description: 'Base StructureDefinition for Media Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A procedure that is fulfilled in whole or in part by the creation of this media.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-subtype
		subtype: {
			type: require('./codeableconcept.input'),
			description: 'Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/media-view
		view: {
			type: require('./codeableconcept.input'),
			description: 'The name of the imaging view e.g. Lateral or Antero-posterior (AP).'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Who/What this Media is a record of.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter or episode of care that establishes the context for this media.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date and time(s) at which the media was collected.'
		},
		_occurrenceDateTime: {
			type: require('./element.input'),
			description: 'The date and time(s) at which the media was collected.'
		},
		occurrencePeriod: {
			type: require('./period.input'),
			description: 'The date and time(s) at which the media was collected.'
		},
		operator: {
			type: require('./reference.input'),
			description: 'The person who administered the collection of the image.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Describes why the event occurred in coded or textual form.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the site on the subject\'s body where the media was collected (i.e. the target site).'
		},
		device: {
			type: require('./reference.input'),
			description: 'The device used to collect the media.'
		},
		height: {
			type: PositiveIntScalar,
			description: 'Height of the image in pixels (photo/video).'
		},
		_height: {
			type: require('./element.input'),
			description: 'Height of the image in pixels (photo/video).'
		},
		width: {
			type: PositiveIntScalar,
			description: 'Width of the image in pixels (photo/video).'
		},
		_width: {
			type: require('./element.input'),
			description: 'Width of the image in pixels (photo/video).'
		},
		frames: {
			type: PositiveIntScalar,
			description: 'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.'
		},
		_frames: {
			type: require('./element.input'),
			description: 'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.'
		},
		duration: {
			type: UnsignedIntScalar,
			description: 'The duration of the recording in seconds - for audio and video.'
		},
		_duration: {
			type: require('./element.input'),
			description: 'The duration of the recording in seconds - for audio and video.'
		},
		content: {
			type: new GraphQLNonNull(require('./attachment.input')),
			description: 'The actual content of the media - inline or by direct reference to the media source file.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Comments made about the media by the performer, subject or other participants.'
		}
	})
});
