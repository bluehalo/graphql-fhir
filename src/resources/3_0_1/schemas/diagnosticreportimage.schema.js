const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary DiagnosticReport.image Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DiagnosticReportImage',
	description:
		'A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			comment: {
				type: GraphQLString,
				description:
					"A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features.",
			},
			_comment: {
				type: require('./element.schema'),
				description:
					"A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features.",
			},
			link: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description: 'Reference to the image source.',
			},
		}),
});
