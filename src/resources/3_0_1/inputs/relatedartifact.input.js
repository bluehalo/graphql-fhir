const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary RelatedArtifact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RelatedArtifact_Input',
	description: 'Base StructureDefinition for RelatedArtifact Type.',
	fields: () => extendSchema(require('./element.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/related-artifact-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of relationship to the related artifact.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of relationship to the related artifact.'
		},
		display: {
			type: GraphQLString,
			description: 'A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.'
		},
		_display: {
			type: require('./element.input'),
			description: 'A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.'
		},
		citation: {
			type: GraphQLString,
			description: 'A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.'
		},
		_citation: {
			type: require('./element.input'),
			description: 'A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.'
		},
		url: {
			type: UriScalar,
			description: 'A url for the artifact that can be followed to access the actual content.'
		},
		_url: {
			type: require('./element.input'),
			description: 'A url for the artifact that can be followed to access the actual content.'
		},
		document: {
			type: require('./attachment.input'),
			description: 'The document being referenced, represented as an attachment. This is exclusive with the resource element.'
		},
		resource: {
			type: require('./reference.input'),
			description: 'The related resource, such as a library, value set, profile, or other knowledge resource.'
		}
	})
});
