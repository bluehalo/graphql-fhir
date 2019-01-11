const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const OidScalar = require('../scalars/oid.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ImagingStudyseries Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudyseries_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_uid: {
			type: require('./element.input.js'),
			description: 'Formal identifier for this series.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this series.',
		},
		_number: {
			type: require('./element.input.js'),
			description: 'The numeric identifier of this series in the study.',
		},
		number: {
			type: UnsignedIntScalar,
			description: 'The numeric identifier of this series in the study.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/dicom-cid29
		modality: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description: 'The modality of this series sequence.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'A description of the series.',
		},
		description: {
			type: GraphQLString,
			description: 'A description of the series.',
		},
		_numberOfInstances: {
			type: require('./element.input.js'),
			description:
				'Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.',
		},
		numberOfInstances: {
			type: UnsignedIntScalar,
			description:
				'Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.',
		},
		_availability: {
			type: require('./element.input.js'),
			description: 'Availability of series (online, offline or nearline).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/instance-availability
		availability: {
			type: CodeScalar,
			description: 'Availability of series (online, offline or nearline).',
		},
		endpoint: {
			type: new GraphQLList(GraphQLString),
			description:
				'The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./coding.input.js'),
			description:
				'The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/bodysite-laterality
		laterality: {
			type: require('./coding.input.js'),
			description:
				'The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.',
		},
		_started: {
			type: require('./element.input.js'),
			description: 'The date and time the series was started.',
		},
		started: {
			type: DateTimeScalar,
			description: 'The date and time the series was started.',
		},
		performer: {
			type: new GraphQLList(GraphQLString),
			description:
				'The physician or operator (often the radiology technician)  who performed the series. The performer is recorded at the series level, since each series in a study may be performed by a different practitioner, at different times, and using different devices. A series may be performed by multiple practitioners.',
		},
		instance: {
			type: new GraphQLList(require('./imagingstudyseriesinstance.input.js')),
			description:
				'A single SOP instance within the series, e.g. an image, or presentation state.',
		},
	}),
});
