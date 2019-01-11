const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
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
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_uid: {
			type: require('./element.schema.js'),
			description: 'The DICOM Series Instance UID for the series.',
		},
		uid: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The DICOM Series Instance UID for the series.',
		},
		_number: {
			type: require('./element.schema.js'),
			description: 'The numeric identifier of this series in the study.',
		},
		number: {
			type: UnsignedIntScalar,
			description: 'The numeric identifier of this series in the study.',
		},
		modality: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'The modality of this series sequence.',
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
			description:
				'Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.',
		},
		numberOfInstances: {
			type: UnsignedIntScalar,
			description:
				'Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.',
		},
		endpoint: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ImagingStudyseriesendpoint_endpoint_Union',
					description:
						'The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.connectionType.',
					types: () => [require('./endpoint.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Endpoint') {
							return require('./endpoint.schema.js');
						}
					},
				}),
			),
			description:
				'The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.connectionType.',
		},
		bodySite: {
			type: require('./coding.schema.js'),
			description:
				'The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.',
		},
		laterality: {
			type: require('./coding.schema.js'),
			description:
				'The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.',
		},
		specimen: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ImagingStudyseriesspecimen_specimen_Union',
					description:
						'The specimen imaged, e.g., for whole slide imaging of a biopsy.',
					types: () => [require('./specimen.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Specimen') {
							return require('./specimen.schema.js');
						}
					},
				}),
			),
			description:
				'The specimen imaged, e.g., for whole slide imaging of a biopsy.',
		},
		_started: {
			type: require('./element.schema.js'),
			description: 'The date and time the series was started.',
		},
		started: {
			type: DateTimeScalar,
			description: 'The date and time the series was started.',
		},
		performer: {
			type: new GraphQLList(require('./imagingstudyseriesperformer.schema.js')),
			description:
				'Indicates who or what performed the series and how they were involved.',
		},
		instance: {
			type: new GraphQLList(require('./imagingstudyseriesinstance.schema.js')),
			description:
				'A single SOP instance within the series, e.g. an image, or presentation state.',
		},
	}),
});
