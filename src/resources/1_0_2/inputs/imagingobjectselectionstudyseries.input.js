const OidScalar = require('../scalars/oid.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ImagingObjectSelection.study.series Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingObjectSelectionStudySeries_Input',
	description: 'Series identity and locating information of the DICOM SOP instances in the selection.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		uid: {
			type: OidScalar,
			description: 'Series instance UID of the SOP instances in the selection.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Series instance UID of the SOP instances in the selection.'
		},
		url: {
			type: UriScalar,
			description: 'WADO-RS URL to retrieve the series. Note that this URL retrieves all SOP instances of the series not only those in the selection.'
		},
		_url: {
			type: require('./element.input'),
			description: 'WADO-RS URL to retrieve the series. Note that this URL retrieves all SOP instances of the series not only those in the selection.'
		},
		instance: {
			type: new GraphQLList(new GraphQLNonNull(require('./imagingobjectselectionstudyseriesinstance.input'))),
			description: 'Identity and locating information of the selected DICOM SOP instances.'
		}
	})
});
