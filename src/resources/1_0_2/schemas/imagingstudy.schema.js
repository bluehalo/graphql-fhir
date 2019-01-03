const DateTimeScalar = require('../scalars/datetime.scalar');
const OidScalar = require('../scalars/oid.scalar');
const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ImagingStudyResourceType = new GraphQLEnumType({
	name: 'ImagingStudyResourceType',
	values: {
		ImagingStudy: { value: 'ImagingStudy' },
	},
});

/**
 * @name exports
 * @summary ImagingStudy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingStudy',
	description: 'Base StructureDefinition for ImagingStudy Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(ImagingStudyResourceType),
				description: 'Type of this resource.',
			},
			started: {
				type: DateTimeScalar,
				description: 'Date and Time the study started.',
			},
			_started: {
				type: require('./element.schema'),
				description: 'Date and Time the study started.',
			},
			patient: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description: 'The patient imaged in the study.',
			},
			uid: {
				type: new GraphQLNonNull(OidScalar),
				description: 'Formal identifier for the study.',
			},
			_uid: {
				type: require('./element.schema'),
				description: 'Formal identifier for the study.',
			},
			accession: {
				type: require('./identifier.schema'),
				description:
					'Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.schema')),
				description: 'Other identifiers for the study.',
			},
			order: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'A list of the diagnostic orders that resulted in this imaging study being performed.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
			modalityList: {
				type: new GraphQLList(require('./coding.schema')),
				description:
					'A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).',
			},
			referrer: {
				type: require('./reference.schema'),
				description: 'The requesting/referring physician.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
			availability: {
				type: CodeScalar,
				description: 'Availability of study (online, offline or nearline).',
			},
			_availability: {
				type: require('./element.schema'),
				description: 'Availability of study (online, offline or nearline).',
			},
			url: {
				type: UriScalar,
				description: 'WADO-RS resource where Study is available.',
			},
			_url: {
				type: require('./element.schema'),
				description: 'WADO-RS resource where Study is available.',
			},
			numberOfSeries: {
				type: new GraphQLNonNull(UnsignedIntScalar),
				description: 'Number of Series in Study.',
			},
			_numberOfSeries: {
				type: require('./element.schema'),
				description: 'Number of Series in Study.',
			},
			numberOfInstances: {
				type: new GraphQLNonNull(UnsignedIntScalar),
				description: 'Number of SOP Instances in Study.',
			},
			_numberOfInstances: {
				type: require('./element.schema'),
				description: 'Number of SOP Instances in Study.',
			},
			procedure: {
				type: new GraphQLList(require('./reference.schema')),
				description: 'Type of procedure performed.',
			},
			interpreter: {
				type: require('./reference.schema'),
				description:
					'Who read the study and interpreted the images or other content.',
			},
			description: {
				type: GraphQLString,
				description:
					'Institution-generated description or classification of the Study performed.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'Institution-generated description or classification of the Study performed.',
			},
			series: {
				type: new GraphQLList(require('./imagingstudyseries.schema')),
				description:
					'Each study has one or more series of images or other content.',
			},
		}),
});
