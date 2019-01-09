const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/dateTime.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const PositiveIntScalar = require('../scalars/positiveInt.scalar.js');

/**
 * @name exports
 * @summary Media Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Media',
	description:
		'A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Media_Enum_schema',
					values: { Media: { value: 'Media' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MediabasedOn_basedOn_Union',
					description:
						'A procedure that is fulfilled in whole or in part by the creation of this media.',
					types: () => [
						require('./servicerequest.schema.js'),
						require('./careplan.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'ServiceRequest') {
							return require('./servicerequest.schema.js');
						}
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
					},
				}),
			),
			description:
				'A procedure that is fulfilled in whole or in part by the creation of this media.',
		},
		partOf: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MediapartOf_partOf_Union',
					description:
						'A larger event of which this particular event is a component or step.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'A larger event of which this particular event is a component or step.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The current state of the {{title}}.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the {{title}}.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code that classifies whether the media is an image, video or audio recording or some other media category.',
		},
		modality: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.',
		},
		view: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The name of the imaging view e.g. Lateral or Antero-posterior (AP).',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Mediasubject_subject_Union',
				description: 'Who/What this Media is a record of.',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./group.schema.js'),
					require('./device.schema.js'),
					require('./specimen.schema.js'),
					require('./location.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Specimen') {
						return require('./specimen.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Who/What this Media is a record of.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'Mediaencounter_encounter_Union',
				description:
					'The encounter that establishes the context for this media.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description: 'The encounter that establishes the context for this media.',
		},
		_createdDateTime: {
			type: require('./element.schema.js'),
			description: 'The date and time(s) at which the media was collected.',
		},
		createdDateTime: {
			type: DateTimeScalar,
			description: 'The date and time(s) at which the media was collected.',
		},
		createdPeriod: {
			type: require('./period.schema.js'),
			description: 'The date and time(s) at which the media was collected.',
		},
		_issued: {
			type: require('./element.schema.js'),
			description:
				'The date and time this version of the media was made available to providers, typically after having been reviewed.',
		},
		issued: {
			type: InstantScalar,
			description:
				'The date and time this version of the media was made available to providers, typically after having been reviewed.',
		},
		operator: {
			type: new GraphQLUnionType({
				name: 'Mediaoperator_operator_Union',
				description: 'The person who administered the collection of the image.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
					require('./careteam.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'CareTeam') {
						return require('./careteam.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'The person who administered the collection of the image.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Describes why the event occurred in coded or textual form.',
		},
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Indicates the site on the subject's body where the observation was made (i.e. the target site).",
		},
		_deviceName: {
			type: require('./element.schema.js'),
			description:
				'The name of the device / manufacturer of the device  that was used to make the recording.',
		},
		deviceName: {
			type: GraphQLString,
			description:
				'The name of the device / manufacturer of the device  that was used to make the recording.',
		},
		device: {
			type: new GraphQLUnionType({
				name: 'Mediadevice_device_Union',
				description: 'The device used to collect the media.',
				types: () => [
					require('./device.schema.js'),
					require('./devicemetric.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'DeviceMetric') {
						return require('./devicemetric.schema.js');
					}
				},
			}),
			description: 'The device used to collect the media.',
		},
		_height: {
			type: require('./element.schema.js'),
			description: 'Height of the image in pixels (photo/video).',
		},
		height: {
			type: PositiveIntScalar,
			description: 'Height of the image in pixels (photo/video).',
		},
		_width: {
			type: require('./element.schema.js'),
			description: 'Width of the image in pixels (photo/video).',
		},
		width: {
			type: PositiveIntScalar,
			description: 'Width of the image in pixels (photo/video).',
		},
		_frames: {
			type: require('./element.schema.js'),
			description:
				'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.',
		},
		frames: {
			type: PositiveIntScalar,
			description:
				'The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.',
		},
		_duration: {
			type: require('./element.schema.js'),
			description:
				'The duration of the recording in seconds - for audio and video.',
		},
		duration: {
			type: GraphQLFloat,
			description:
				'The duration of the recording in seconds - for audio and video.',
		},
		content: {
			type: new GraphQLNonNull(require('./attachment.schema.js')),
			description:
				'The actual content of the media - inline or by direct reference to the media source file.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Comments made about the media by the performer, subject or other participants.',
		},
	}),
});
