const CodeScalar = require('../scalars/code.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let MediaResourceInputType = new GraphQLEnumType({
	name: 'MediaResourceInputType',
	values: {
		Media: { value: 'Media' }
	}
});

/**
 * @name exports
 * @summary Media Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Media_Input',
	description: 'Base StructureDefinition for Media Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(MediaResourceInputType),
			description: 'Type of this resource.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-subtype
		subtype: {
			type: require('./codeableconcept.input'),
			description: 'Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Who/What this Media is a record of.'
		},
		operator: {
			type: require('./reference.input'),
			description: 'The person who administered the collection of the image.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/media-view
		view: {
			type: require('./codeableconcept.input'),
			description: 'The name of the imaging view e.g. Lateral or Antero-posterior (AP).'
		},
		deviceName: {
			type: GraphQLString,
			description: 'The name of the device / manufacturer of the device  that was used to make the recording.'
		},
		_deviceName: {
			type: require('./element.input'),
			description: 'The name of the device / manufacturer of the device  that was used to make the recording.'
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
		}
	})
});
