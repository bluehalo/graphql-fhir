const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

// Scalars
const InstantScalar = require('../scalars/instant.scalar');
const IdScalar = require('../scalars/id.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Meta Fields
 */
let MetaInput = new GraphQLInputObjectType({
	name: 'MetaInput',
	description: 'The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
	fields: () => extendSchema(require('./element.input'), {
		versionId: {
			type: IdScalar,
			description: 'The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.'
		},
		_versionId: {
			type: require('./extension.input'),
			description: 'Extensions for versionId'
		},
		lastUpdated: {
			type: InstantScalar,
			description: 'When the resource last changed - e.g. when the version changed.'
		},
		_lastUpdated: {
			type: require('./extension.input'),
			description: 'Extensions for lastUpdated'
		},
		profile: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url]().'
		},
		_profile: {
			type: require('./extension.input'),
			description: 'Extensions for profile'
		},
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

module.exports = MetaInput;
