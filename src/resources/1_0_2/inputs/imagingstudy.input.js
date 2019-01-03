const DateTimeScalar = require('../scalars/datetime.scalar');
const OidScalar = require('../scalars/oid.scalar');
const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ImagingStudyResourceInputType = new GraphQLEnumType({
	name: 'ImagingStudyResourceInputType',
	values: {
		ImagingStudy: { value: 'ImagingStudy' }
	}
});

/**
 * @name exports
 * @summary ImagingStudy Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudy_Input',
	description: 'Base StructureDefinition for ImagingStudy Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ImagingStudyResourceInputType),
			description: 'Type of this resource.'
		},
		started: {
			type: DateTimeScalar,
			description: 'Date and Time the study started.'
		},
		_started: {
			type: require('./element.input'),
			description: 'Date and Time the study started.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient imaged in the study.'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for the study.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Formal identifier for the study.'
		},
		accession: {
			type: require('./identifier.input'),
			description: 'Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Other identifiers for the study.'
		},
		order: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A list of the diagnostic orders that resulted in this imaging study being performed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		modalityList: {
			type: new GraphQLList(require('./coding.input')),
			description: 'A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).'
		},
		referrer: {
			type: require('./reference.input'),
			description: 'The requesting/referring physician.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		availability: {
			type: CodeScalar,
			description: 'Availability of study (online, offline or nearline).'
		},
		_availability: {
			type: require('./element.input'),
			description: 'Availability of study (online, offline or nearline).'
		},
		url: {
			type: UriScalar,
			description: 'WADO-RS resource where Study is available.'
		},
		_url: {
			type: require('./element.input'),
			description: 'WADO-RS resource where Study is available.'
		},
		numberOfSeries: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'Number of Series in Study.'
		},
		_numberOfSeries: {
			type: require('./element.input'),
			description: 'Number of Series in Study.'
		},
		numberOfInstances: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description: 'Number of SOP Instances in Study.'
		},
		_numberOfInstances: {
			type: require('./element.input'),
			description: 'Number of SOP Instances in Study.'
		},
		procedure: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Type of procedure performed.'
		},
		interpreter: {
			type: require('./reference.input'),
			description: 'Who read the study and interpreted the images or other content.'
		},
		description: {
			type: GraphQLString,
			description: 'Institution-generated description or classification of the Study performed.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Institution-generated description or classification of the Study performed.'
		},
		series: {
			type: new GraphQLList(require('./imagingstudyseries.input')),
			description: 'Each study has one or more series of images or other content.'
		}
	})
});
