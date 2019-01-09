const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ImagingObjectSelectionstudy Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingObjectSelectionstudy_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
			description: 'Study instance UID of the SOP instances in the selection.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Study instance UID of the SOP instances in the selection.',
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.',
		},
		url: {
			type: UriScalar,
			description:
				'WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.',
		},
		imagingStudy: {
			type: GraphQLString,
			description: 'Reference to the Imaging Study in FHIR form.',
		},
		series: {
			type: new GraphQLList(
				new GraphQLNonNull(
					require('./imagingobjectselectionstudyseries.input.js'),
				),
			),
			description:
				'Series identity and locating information of the DICOM SOP instances in the selection.',
		},
	}),
});
