const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UrlScalar = require('../scalars/url.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary RelatedArtifact Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RelatedArtifact',
	description:
		'Base StructureDefinition for RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references.',
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
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of relationship to the related artifact.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship to the related artifact.',
		},
		_label: {
			type: require('./element.schema.js'),
			description:
				'A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.',
		},
		label: {
			type: GraphQLString,
			description:
				'A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.',
		},
		_display: {
			type: require('./element.schema.js'),
			description:
				'A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.',
		},
		display: {
			type: GraphQLString,
			description:
				'A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.',
		},
		_citation: {
			type: require('./element.schema.js'),
			description:
				'A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.',
		},
		citation: {
			type: GraphQLString,
			description:
				'A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'A url for the artifact that can be followed to access the actual content.',
		},
		url: {
			type: UrlScalar,
			description:
				'A url for the artifact that can be followed to access the actual content.',
		},
		document: {
			type: require('./attachment.schema.js'),
			description:
				'The document being referenced, represented as an attachment. This is exclusive with the resource element.',
		},
		_resource: {
			type: require('./element.schema.js'),
			description:
				'The related resource, such as a library, value set, profile, or other knowledge resource.',
		},
		resource: {
			type: CanonicalScalar,
			description:
				'The related resource, such as a library, value set, profile, or other knowledge resource.',
		},
	}),
});
