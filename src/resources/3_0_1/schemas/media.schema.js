const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let MediaResourceType = new GraphQLEnumType({
	name: 'MediaResourceType',
	values: {
		Media: { value: 'Media' }
	}
});

/**
 * @name exports
 * @summary Media Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Media',
	description: 'Base StructureDefinition for Media Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(MediaResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A procedure that is fulfilled in whole or in part by the creation of this media.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Whether the media is a photo (still image), an audio recording, or a video recording.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/digital-media-subtype
		subtype: {
			type: require('./codeableconcept.schema'),
			description: 'Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/media-view
		view: {
			type: require('./codeableconcept.schema'),
			description: 'The name of the imaging view e.g. Lateral or Antero-posterior (AP).'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'Who/What this Media is a record of.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The encounter or episode of care that establishes the context for this media.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date and time(s) at which the media was collected.'
		},
		_occurrenceDateTime: {
			type: require('./element.schema'),
			description: 'The date and time(s) at which the media was collected.'
		},
		occurrencePeriod: {
			type: require('./period.schema'),
			description: 'The date and time(s) at which the media was collected.'
		},
		operator: {
			type: require('./reference.schema'),
			description: 'The person who administered the collection of the image.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Describes why the event occurred in coded or textual form.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the site on the subject\'s body where the media was collected (i.e. the target site).'
		},
		device: {
			type: require('./reference.schema'),
			description: 'The device used to collect the media.'
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
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Comments made about the media by the performer, subject or other participants.'
		}
	})
});
