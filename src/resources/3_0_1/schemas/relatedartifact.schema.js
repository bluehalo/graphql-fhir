const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary RelatedArtifact Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RelatedArtifact',
	description: 'Base StructureDefinition for RelatedArtifact Type',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of relationship to the related artifact.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/related-artifact-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship to the related artifact.',
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
			type: UriScalar,
			description:
				'A url for the artifact that can be followed to access the actual content.',
		},
		document: {
			type: require('./attachment.schema.js'),
			description:
				'The document being referenced, represented as an attachment. This is exclusive with the resource element.',
		},
		resource: {
			type: new GraphQLUnionType({
				name: 'RelatedArtifactresource_resource_Union',
				description:
					'The related resource, such as a library, value set, profile, or other knowledge resource.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'The related resource, such as a library, value set, profile, or other knowledge resource.',
		},
	}),
});
