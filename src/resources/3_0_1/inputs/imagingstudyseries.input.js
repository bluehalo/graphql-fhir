const OidScalar = require('../scalars/oid.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingStudy.series Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudySeries_Input',
	description: 'Each study has one or more series of images or other content.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this series.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Formal identifier for this series.'
		},
		number: {
			type: UnsignedIntScalar,
			description: 'The numeric identifier of this series in the study.'
		},
		_number: {
			type: require('./element.input'),
			description: 'The numeric identifier of this series in the study.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		modality: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The modality of this series sequence.'
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
			type: UnsignedIntScalar,
			description: 'Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.'
		},
		_numberOfInstances: {
			type: require('./element.input'),
			description: 'Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		availability: {
			type: CodeScalar,
			description: 'Availability of series (online, offline or nearline).'
		},
		_availability: {
			type: require('./element.input'),
			description: 'Availability of series (online, offline or nearline).'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./coding.input'),
			description: 'The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/bodysite-laterality
		laterality: {
			type: require('./coding.input'),
			description: 'The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.'
		},
		started: {
			type: DateTimeScalar,
			description: 'The date and time the series was started.'
		},
		_started: {
			type: require('./element.input'),
			description: 'The date and time the series was started.'
		},
		performer: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.'
		},
		instance: {
			type: new GraphQLList(require('./imagingstudyseriesinstance.input')),
			description: 'A single SOP instance within the series, e.g. an image, or presentation state.'
		}
	})
});
