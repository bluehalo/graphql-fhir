const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const OidScalar = require('../scalars/oid.scalar.js');

/**
 * @name exports
 * @summary ImagingManifeststudy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingManifeststudy',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_uid: {
			type: require('./element.schema.js'),
			description: 'Study instance UID of the SOP instances in the selection.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Study instance UID of the SOP instances in the selection.',
		},
		imagingStudy: {
			type: new GraphQLUnionType({
				name: 'ImagingManifeststudyimagingStudy_imagingStudy_Union',
				description: 'Reference to the Imaging Study in FHIR form.',
				types: () => [require('./imagingstudy.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'ImagingStudy') {
						return require('./imagingstudy.schema.js');
					}
				},
			}),
			description: 'Reference to the Imaging Study in FHIR form.',
		},
		endpoint: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ImagingManifeststudyendpoint_endpoint_Union',
					description:
						'The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.',
					types: () => [require('./endpoint.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Endpoint') {
							return require('./endpoint.schema.js');
						}
					},
				}),
			),
			description:
				'The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type.',
		},
		series: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./imagingmanifeststudyseries.schema.js')),
			),
			description:
				'Series identity and locating information of the DICOM SOP instances in the selection.',
		},
	}),
});
