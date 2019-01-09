const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_type: {
			type: require('./element.input.js'),
			description: 'A type of resource exposed via the restful interface.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A type of resource exposed via the restful interface.',
		},
		profile: {
			type: GraphQLString,
			description:
				"A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses).",
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
				new GraphQLNonNull(
					require('./capabilitystatementrestresourceinteraction.input.js'),
				),
			),
			description: 'Identifies a restful operation supported by the solution.',
		},
		_versioning: {
			type: require('./element.input.js'),
			description:
				"This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/versioning-policy
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
				'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.',
		},
		updateCreate: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/conditional-read-status
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/conditional-delete-status
		conditionalDelete: {
			type: CodeScalar,
			description:
				'A code that indicates how the server supports conditional delete.',
		},
		_referencePolicy: {
			type: require('./element.input.js'),
			description: 'A set of flags that defines how references are supported.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/reference-handling-policy
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
	}),
});
