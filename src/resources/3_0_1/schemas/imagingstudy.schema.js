const OidScalar = require('../scalars/oid.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let ImagingStudyResourceType = new GraphQLEnumType({
	name: 'ImagingStudyResourceType',
	values: {
		ImagingStudy: { value: 'ImagingStudy' }
	}
});

/**
 * @name exports
 * @summary ImagingStudy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingStudy',
	description: 'Base StructureDefinition for ImagingStudy Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ImagingStudyResourceType),
			description: 'Type of this resource'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for the study.'
		},
		_uid: {
			type: require('./element.schema'),
			description: 'Formal identifier for the study.'
		},
		accession: {
			type: require('./identifier.schema'),
			description: 'Accession Number is an identifier related to some aspect of imaging workflow and data management. Usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Other identifiers for the study.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		availability: {
			type: CodeScalar,
			description: 'Availability of study (online, offline, or nearline).'
		},
		_availability: {
			type: require('./element.schema'),
			description: 'Availability of study (online, offline, or nearline).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		modalityList: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient imaged in the study.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The encounter or episode at which the request is initiated.'
		},
		started: {
			type: DateTimeScalar,
			description: 'Date and time the study started.'
		},
		_started: {
			type: require('./element.schema'),
			description: 'Date and time the study started.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A list of the diagnostic requests that resulted in this imaging study being performed.'
		},
		referrer: {
			type: require('./reference.schema'),
			description: 'The requesting/referring physician.'
		},
		interpreter: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Who read the study and interpreted the images or other content.'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.'
		},
		numberOfSeries: {
			type: UnsignedIntScalar,
			description: 'Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.'
		},
		_numberOfSeries: {
			type: require('./element.schema'),
			description: 'Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.'
		},
		numberOfInstances: {
			type: UnsignedIntScalar,
			description: 'Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.'
		},
		_numberOfInstances: {
			type: require('./element.schema'),
			description: 'Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.'
		},
		procedureReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A reference to the performed Procedure.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		procedureCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The code for the performed procedure type.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reason: {
			type: require('./codeableconcept.schema'),
			description: 'Description of clinical condition indicating why the ImagingStudy was requested.'
		},
		description: {
			type: GraphQLString,
			description: 'Institution-generated description or classification of the Study performed.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Institution-generated description or classification of the Study performed.'
		},
		series: {
			type: new GraphQLList(require('./imagingstudyseries.schema')),
			description: 'Each study has one or more series of images or other content.'
		}
	})
});
