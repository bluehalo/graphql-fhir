const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UrlScalar = require('../scalars/url.scalar.js');

/**
 * @name exports
 * @summary ImplementationGuidemanifest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImplementationGuidemanifest_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_rendering: {
			type: require('./element.input.js'),
			description:
				'A pointer to official web page, PDF or other rendering of the implementation guide.',
		},
		rendering: {
			type: UrlScalar,
			description:
				'A pointer to official web page, PDF or other rendering of the implementation guide.',
		},
		resource: {
			type: new GraphQLList(
				new GraphQLNonNull(
					require('./implementationguidemanifestresource.input.js'),
				),
			),
			description:
				'A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.',
		},
		page: {
			type: new GraphQLList(
				require('./implementationguidemanifestpage.input.js'),
			),
			description: 'Information about a page within the IG.',
		},
		_image: {
			type: require('./element.input.js'),
			description:
				'Indicates a relative path to an image that exists within the IG.',
		},
		image: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates a relative path to an image that exists within the IG.',
		},
		_other: {
			type: require('./element.input.js'),
			description:
				'Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.',
		},
		other: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.',
		},
	}),
});
