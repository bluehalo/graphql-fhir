const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary RelatedArtifact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RelatedArtifact_Input',
	description: 'Base StructureDefinition for RelatedArtifact Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_type: {
			type: require('./element.input.js'),
			description: 'The type of relationship to the related artifact.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/related-artifact-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship to the related artifact.',
		},
		_display: {
			type: require('./element.input.js'),
			description:
				'A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.',
		},
		display: {
			type: GraphQLString,
			description:
				'A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.',
		},
		_citation: {
			type: require('./element.input.js'),
			description:
				'A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.',
		},
		citation: {
			type: GraphQLString,
			description:
				'A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.',
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'A url for the artifact that can be followed to access the actual content.',
		},
		url: {
			type: UriScalar,
			description:
				'A url for the artifact that can be followed to access the actual content.',
		},
		document: {
			type: require('./attachment.input.js'),
			description:
				'The document being referenced, represented as an attachment. This is exclusive with the resource element.',
		},
		resource: {
			type: GraphQLString,
			description:
				'The related resource, such as a library, value set, profile, or other knowledge resource.',
		},
	}),
});
