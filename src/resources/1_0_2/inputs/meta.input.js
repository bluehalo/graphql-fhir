const IdScalar = require('../scalars/id.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Meta Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Meta_Input',
	description: 'Base StructureDefinition for Meta Type.',
	fields: () => extendSchema({
		versionId: {
			type: IdScalar,
			description: 'The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.'
		},
		_versionId: {
			type: require('./element.input'),
			description: 'The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.'
		},
		lastUpdated: {
			type: InstantScalar,
			description: 'When the resource last changed - e.g. when the version changed.'
		},
		_lastUpdated: {
			type: require('./element.input'),
			description: 'When the resource last changed - e.g. when the version changed.'
		},
		profile: {
			type: new GraphQLList(UriScalar),
			description: 'A list of profiles [[[StructureDefinition]]]s that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].'
		},
		_profile: {
			type: require('./element.input'),
			description: 'A list of profiles [[[StructureDefinition]]]s that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		security: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.'
		},
		tag: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.'
		}
	})
});
