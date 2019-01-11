const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const OidScalar = require('../scalars/oid.scalar.js');

/**
 * @name exports
 * @summary ImagingManifeststudyseries Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingManifeststudyseries_Input',
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
			description: 'Series instance UID of the SOP instances in the selection.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Series instance UID of the SOP instances in the selection.',
		},
		endpoint: {
			type: new GraphQLList(GraphQLString),
			description:
				'The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type.',
		},
		instance: {
			type: new GraphQLList(
				new GraphQLNonNull(
					require('./imagingmanifeststudyseriesinstance.input.js'),
				),
			),
			description:
				'Identity and locating information of the selected DICOM SOP instances.',
		},
	}),
});
