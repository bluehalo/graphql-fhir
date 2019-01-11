const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Meta Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Meta',
	description: 'Base StructureDefinition for Meta Type',
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
		_versionId: {
			type: require('./element.schema.js'),
			description:
				'The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.',
		},
		versionId: {
			type: IdScalar,
			description:
				'The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.',
		},
		_lastUpdated: {
			type: require('./element.schema.js'),
			description:
				'When the resource last changed - e.g. when the version changed.',
		},
		lastUpdated: {
			type: InstantScalar,
			description:
				'When the resource last changed - e.g. when the version changed.',
		},
		_profile: {
			type: require('./element.schema.js'),
			description:
				'A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url]().',
		},
		profile: {
			type: new GraphQLList(UriScalar),
			description:
				'A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url]().',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		security: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/common-tags
		tag: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.',
		},
	}),
});
