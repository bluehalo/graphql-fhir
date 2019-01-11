const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary DiagnosticReportmedia Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DiagnosticReportmedia',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
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
					name: 'DiagnosticReportmedialink_link_Union',
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
