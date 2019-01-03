const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const UriScalar = require('../scalars/uri.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ImagingObjectSelection.study.series.instance.frames Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingObjectSelectionStudySeriesInstanceFrames_Input',
	description:
		'Identity and location information of the frames in the selected instance.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			frameNumbers: {
				type: new GraphQLList(new GraphQLNonNull(UnsignedIntScalar)),
				description: 'The frame numbers in the frame set.',
			},
			_frameNumbers: {
				type: require('./element.input'),
				description: 'The frame numbers in the frame set.',
			},
			url: {
				type: new GraphQLNonNull(UriScalar),
				description: 'WADO-RS URL to retrieve the DICOM frames.',
			},
			_url: {
				type: require('./element.input'),
				description: 'WADO-RS URL to retrieve the DICOM frames.',
			},
		}),
});
