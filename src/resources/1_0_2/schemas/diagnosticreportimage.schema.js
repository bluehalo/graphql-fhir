const {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary DiagnosticReportimage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DiagnosticReportimage',
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
		_comment: {
			type: require('./element.schema.js'),
			description:
				"A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features.",
		},
		comment: {
			type: GraphQLString,
			description:
				"A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features.",
		},
		link: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'DiagnosticReportimagelink_link_Union',
					description: 'Reference to the image source.',
					types: () => [require('./media.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Media') {
							return require('./media.schema.js');
						}
					},
				}),
			),
			description: 'Reference to the image source.',
		},
	}),
});
