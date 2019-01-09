const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');
const OidScalar = require('../scalars/oid.scalar.js');

/**
 * @name exports
 * @summary ImagingStudyseriesinstance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingStudyseriesinstance',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		_number: {
			type: require('./element.schema.js'),
			description: 'The number of instance in the series.',
		},
		number: {
			type: UnsignedIntScalar,
			description: 'The number of instance in the series.',
		},
		_uid: {
			type: require('./element.schema.js'),
			description: 'Formal identifier for this image or other content.',
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this image or other content.',
		},
		_sopClass: {
			type: require('./element.schema.js'),
			description: 'DICOM instance  type.',
		},
		sopClass: {
			type: new GraphQLNonNull(OidScalar),
			description: 'DICOM instance  type.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'A human-friendly SOP Class name.',
		},
		type: {
			type: GraphQLString,
			description: 'A human-friendly SOP Class name.',
		},
		_title: {
			type: require('./element.schema.js'),
			description: 'The description of the instance.',
		},
		title: {
			type: GraphQLString,
			description: 'The description of the instance.',
		},
		content: {
			type: new GraphQLList(require('./attachment.schema.js')),
			description:
				'Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.',
		},
	}),
});
