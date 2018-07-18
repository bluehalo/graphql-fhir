const OidScalar = require('../scalars/oid.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImagingStudySeriesInstance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingStudySeriesInstance',
	description: 'A single SOP instance within the series, e.g. an image, or presentation state.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Formal identifier for this image or other content.'
		},
		_uid: {
			type: require('./element.schema'),
			description: 'Formal identifier for this image or other content.'
		},
		number: {
			type: UnsignedIntScalar,
			description: 'The number of instance in the series.'
		},
		_number: {
			type: require('./element.schema'),
			description: 'The number of instance in the series.'
		},
		sopClass: {
			type: new GraphQLNonNull(OidScalar),
			description: 'DICOM instance  type.'
		},
		_sopClass: {
			type: require('./element.schema'),
			description: 'DICOM instance  type.'
		},
		title: {
			type: GraphQLString,
			description: 'The description of the instance.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'The description of the instance.'
		}
	})
});
