const OidScalar = require('../scalars/oid.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImagingStudy.series.instance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingStudySeriesInstance_Input',
	description: 'A single SOP instance within the series, e.g. an image, or presentation state.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this image or other content.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Formal identifier for this image or other content.'
		},
		number: {
			type: UnsignedIntScalar,
			description: 'The number of instance in the series.'
		},
		_number: {
			type: require('./element.input'),
			description: 'The number of instance in the series.'
		},
		sopClass: {
			type: new GraphQLNonNull(OidScalar),
			description: 'DICOM instance  type.'
		},
		_sopClass: {
			type: require('./element.input'),
			description: 'DICOM instance  type.'
		},
		title: {
			type: GraphQLString,
			description: 'The description of the instance.'
		},
		_title: {
			type: require('./element.input'),
			description: 'The description of the instance.'
		}
	})
});
