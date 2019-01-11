const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementrestresource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementrestresource_Input',
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
		_type: {
			type: require('./element.input.js'),
			description: 'A type of resource exposed via the restful interface.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A type of resource exposed via the restful interface.',
		},
		_profile: {
			type: require('./element.input.js'),
			description:
				"A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).",
		},
		profile: {
			type: CanonicalScalar,
			description:
				"A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).",
		},
		_supportedProfile: {
			type: require('./element.input.js'),
			description:
				"A list of profiles that represent different use cases supported by the system. For a server, 'supported by the system' means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses).",
		},
		supportedProfile: {
			type: new GraphQLList(CanonicalScalar),
			description:
				"A list of profiles that represent different use cases supported by the system. For a server, 'supported by the system' means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses).",
		},
		_documentation: {
			type: require('./element.input.js'),
			description:
				'Additional information about the resource type used by the system.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'Additional information about the resource type used by the system.',
		},
		interaction: {
			type: new GraphQLList(
				require('./capabilitystatementrestresourceinteraction.input.js'),
			),
			description: 'Identifies a restful operation supported by the solution.',
		},
		_versioning: {
			type: require('./element.input.js'),
			description:
				"This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.",
		},
		versioning: {
			type: CodeScalar,
			description:
				"This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.",
		},
		_readHistory: {
			type: require('./element.input.js'),
			description:
				'A flag for whether the server is able to return past versions as part of the vRead operation.',
		},
		readHistory: {
			type: GraphQLBoolean,
			description:
				'A flag for whether the server is able to return past versions as part of the vRead operation.',
		},
		_updateCreate: {
			type: require('./element.input.js'),
			description:
				'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.',
		},
		updateCreate: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.',
		},
		_conditionalCreate: {
			type: require('./element.input.js'),
			description:
				'A flag that indicates that the server supports conditional create.',
		},
		conditionalCreate: {
			type: GraphQLBoolean,
			description:
				'A flag that indicates that the server supports conditional create.',
		},
		_conditionalRead: {
			type: require('./element.input.js'),
			description:
				'A code that indicates how the server supports conditional read.',
		},
		conditionalRead: {
			type: CodeScalar,
			description:
				'A code that indicates how the server supports conditional read.',
		},
		_conditionalUpdate: {
			type: require('./element.input.js'),
			description:
				'A flag that indicates that the server supports conditional update.',
		},
		conditionalUpdate: {
			type: GraphQLBoolean,
			description:
				'A flag that indicates that the server supports conditional update.',
		},
		_conditionalDelete: {
			type: require('./element.input.js'),
			description:
				'A code that indicates how the server supports conditional delete.',
		},
		conditionalDelete: {
			type: CodeScalar,
			description:
				'A code that indicates how the server supports conditional delete.',
		},
		_referencePolicy: {
			type: require('./element.input.js'),
			description: 'A set of flags that defines how references are supported.',
		},
		referencePolicy: {
			type: new GraphQLList(CodeScalar),
			description: 'A set of flags that defines how references are supported.',
		},
		_searchInclude: {
			type: require('./element.input.js'),
			description: 'A list of _include values supported by the server.',
		},
		searchInclude: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of _include values supported by the server.',
		},
		_searchRevInclude: {
			type: require('./element.input.js'),
			description:
				'A list of _revinclude (reverse include) values supported by the server.',
		},
		searchRevInclude: {
			type: new GraphQLList(GraphQLString),
			description:
				'A list of _revinclude (reverse include) values supported by the server.',
		},
		searchParam: {
			type: new GraphQLList(
				require('./capabilitystatementrestresourcesearchparam.input.js'),
			),
			description:
				'Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.',
		},
		operation: {
			type: new GraphQLList(
				require('./capabilitystatementrestresourceoperation.input.js'),
			),
			description:
				'Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters.',
		},
	}),
});
