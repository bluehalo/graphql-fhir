const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const OidScalar = require('../scalars/oid.scalar');
const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImagingStudySeries Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudySeries_Input',
	description: 'Each study has one or more series of images or other content.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		number: {
			type: UnsignedIntScalar,
			description: 'The Numeric identifier of this series in the study.'
		},
		_number: {
			type: require('./element.input'),
			description: 'The Numeric identifier of this series in the study.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		modality: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The modality of this series sequence.'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this series.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Formal identifier for this series.'
		},
		description: {
			type: GraphQLString,
			description: 'A description of the series.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A description of the series.'
		},
		numberOfInstances: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'Number of SOP Instances in Series.'
		},
		_numberOfInstances: {
			type: require('./element.input'),
			description: 'Number of SOP Instances in Series.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		availability: {
			type: CodeScalar,
			description: 'Availability of series (online, offline or nearline).'
		},
		_availability: {
			type: require('./element.input'),
			description: 'Availability of series (online, offline or nearline).'
		},
		url: {
			type: UriScalar,
			description: 'URI/URL specifying the location of the referenced series using WADO-RS.'
		},
		_url: {
			type: require('./element.input'),
			description: 'URI/URL specifying the location of the referenced series using WADO-RS.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./coding.input'),
			description: 'Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-laterality
		laterality: {
			type: require('./coding.input'),
			description: 'Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.'
		},
		started: {
			type: DateTimeScalar,
			description: 'The date and time the series was started.'
		},
		_started: {
			type: require('./element.input'),
			description: 'The date and time the series was started.'
		},
		instance: {
			type: new GraphQLList(require('./imagingstudyseriesinstance.input')),
			description: 'A single SOP Instance within the series, e.g. an image, or presentation state.'
		}
	})
});
