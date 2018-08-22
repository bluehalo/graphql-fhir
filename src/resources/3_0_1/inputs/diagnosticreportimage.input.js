const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DiagnosticReportImage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticReportImage_Input',
	description: 'A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		comment: {
			type: GraphQLString,
			description: 'A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer\'s attention to important features.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer\'s attention to important features.'
		},
		link: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Reference to the image source.'
		}
	})
});
