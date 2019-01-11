const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ImagingStudyseries Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingStudyseries',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_number: {
			type: require('./element.schema.js'),
			description: 'The Numeric identifier of this series in the study.',
		},
		number: {
			type: UnsignedIntScalar,
			description: 'The Numeric identifier of this series in the study.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		modality: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'The modality of this series sequence.',
		},
		_uid: {
			type: require('./element.schema.js'),
			description: 'Formal identifier for this series.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this series.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'A description of the series.',
		},
		description: {
			type: GraphQLString,
			description: 'A description of the series.',
		},
		_numberOfInstances: {
			type: require('./element.schema.js'),
			description: 'Number of SOP Instances in Series.',
		},
		numberOfInstances: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'Number of SOP Instances in Series.',
		},
		_availability: {
			type: require('./element.schema.js'),
			description: 'Availability of series (online, offline or nearline).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		availability: {
			type: CodeScalar,
			description: 'Availability of series (online, offline or nearline).',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'URI/URL specifying the location of the referenced series using WADO-RS.',
		},
		url: {
			type: UriScalar,
			description:
				'URI/URL specifying the location of the referenced series using WADO-RS.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./coding.schema.js'),
			description:
				'Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/bodysite-laterality
		laterality: {
			type: require('./coding.schema.js'),
			description:
				'Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.',
		},
		_started: {
			type: require('./element.schema.js'),
			description: 'The date and time the series was started.',
		},
		started: {
			type: DateTimeScalar,
			description: 'The date and time the series was started.',
		},
		instance: {
			type: new GraphQLList(require('./imagingstudyseriesinstance.schema.js')),
			description:
				'A single SOP Instance within the series, e.g. an image, or presentation state.',
		},
	}),
});
