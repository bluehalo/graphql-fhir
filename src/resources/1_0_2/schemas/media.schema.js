const CodeScalar = require('../scalars/code.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Media Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Media',
	description: 'Base StructureDefinition for Media Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-subtype
		subtype: {
			type: require('./codeableconcept.schema'),
			description: 'Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'Who/What this Media is a record of.'
		},
		operator: {
			type: require('./reference.schema'),
			description: 'The person who administered the collection of the image.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/media-view
		view: {
			type: require('./codeableconcept.schema'),
			description: 'The name of the imaging view e.g. Lateral or Antero-posterior (AP).'
		},
		deviceName: {
			type: GraphQLString,
			description: 'The name of the device / manufacturer of the device  that was used to make the recording.'
		},
		_deviceName: {
			type: require('./element.schema'),
			description: 'The name of the device / manufacturer of the device  that was used to make the recording.'
		},
		height: {
			type: PositiveIntScalar,
			description: 'Height of the image in pixels (photo/video).'
		},
		_height: {
			type: require('./element.schema'),
			description: 'Height of the image in pixels (photo/video).'
		},
		width: {
			type: PositiveIntScalar,
			description: 'Width of the image in pixels (photo/video).'
		},
		_width: {
			type: require('./element.schema'),
			description: 'Width of the image in pixels (photo/video).'
		},
		frames: {
			type: PositiveIntScalar,
			description: 'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.'
		},
		_frames: {
			type: require('./element.schema'),
			description: 'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.'
		},
		duration: {
			type: UnsignedIntScalar,
			description: 'The duration of the recording in seconds - for audio and video.'
		},
		_duration: {
			type: require('./element.schema'),
			description: 'The duration of the recording in seconds - for audio and video.'
		},
		content: {
			type: new GraphQLNonNull(require('./attachment.schema')),
			description: 'The actual content of the media - inline or by direct reference to the media source file.'
		}
	})
});
