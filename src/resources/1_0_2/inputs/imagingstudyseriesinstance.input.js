const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const OidScalar = require('../scalars/oid.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingStudy.series.instance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudySeriesInstance_Input',
	description: 'A single SOP Instance within the series, e.g. an image, or presentation state.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		number: {
			type: UnsignedIntScalar,
			description: 'The number of instance in the series.'
		},
		_number: {
			type: require('./element.input'),
			description: 'The number of instance in the series.'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this image or other content.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Formal identifier for this image or other content.'
		},
		sopClass: {
			type: new GraphQLNonNull(OidScalar),
			description: 'DICOM instance  type.'
		},
		_sopClass: {
			type: require('./element.input'),
			description: 'DICOM instance  type.'
		},
		type: {
			type: GraphQLString,
			description: 'A human-friendly SOP Class name.'
		},
		_type: {
			type: require('./element.input'),
			description: 'A human-friendly SOP Class name.'
		},
		title: {
			type: GraphQLString,
			description: 'The description of the instance.'
		},
		_title: {
			type: require('./element.input'),
			description: 'The description of the instance.'
		},
		content: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Content of the instance or a rendering thereof (e.g. a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g. Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.'
		}
	})
});
