const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const OidScalar = require('../scalars/oid.scalar');
const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ImagingStudy.series Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingStudySeries',
	description: 'Each study has one or more series of images or other content.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			number: {
				type: UnsignedIntScalar,
				description: 'The Numeric identifier of this series in the study.',
			},
			_number: {
				type: require('./element.schema'),
				description: 'The Numeric identifier of this series in the study.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
			modality: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description: 'The modality of this series sequence.',
			},
			uid: {
				type: new GraphQLNonNull(OidScalar),
				description: 'Formal identifier for this series.',
			},
			_uid: {
				type: require('./element.schema'),
				description: 'Formal identifier for this series.',
			},
			description: {
				type: GraphQLString,
				description: 'A description of the series.',
			},
			_description: {
				type: require('./element.schema'),
				description: 'A description of the series.',
			},
			numberOfInstances: {
				type: new GraphQLNonNull(UnsignedIntScalar),
				description: 'Number of SOP Instances in Series.',
			},
			_numberOfInstances: {
				type: require('./element.schema'),
				description: 'Number of SOP Instances in Series.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
			availability: {
				type: CodeScalar,
				description: 'Availability of series (online, offline or nearline).',
			},
			_availability: {
				type: require('./element.schema'),
				description: 'Availability of series (online, offline or nearline).',
			},
			url: {
				type: UriScalar,
				description:
					'URI/URL specifying the location of the referenced series using WADO-RS.',
			},
			_url: {
				type: require('./element.schema'),
				description:
					'URI/URL specifying the location of the referenced series using WADO-RS.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
			bodySite: {
				type: require('./coding.schema'),
				description:
					'Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-laterality
			laterality: {
				type: require('./coding.schema'),
				description:
					'Laterality if body site is paired anatomic structure and laterality is not pre-coordinated in body site code.',
			},
			started: {
				type: DateTimeScalar,
				description: 'The date and time the series was started.',
			},
			_started: {
				type: require('./element.schema'),
				description: 'The date and time the series was started.',
			},
			instance: {
				type: new GraphQLList(require('./imagingstudyseriesinstance.schema')),
				description:
					'A single SOP Instance within the series, e.g. an image, or presentation state.',
			},
		}),
});
