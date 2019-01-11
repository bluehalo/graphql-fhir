const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Conformancerestresource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conformancerestresource',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'A type of resource exposed via the restful interface.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A type of resource exposed via the restful interface.',
		},
		profile: {
			type: new GraphQLUnionType({
				name: 'Conformancerestresourceprofile_profile_Union',
				description:
					"A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles]{profiling.html#profile-uses}.",
				types: () => [require('./structuredefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'StructureDefinition') {
						return require('./structuredefinition.schema.js');
					}
				},
			}),
			description:
				"A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles]{profiling.html#profile-uses}.",
		},
		interaction: {
			type: new GraphQLList(
				new GraphQLNonNull(
					require('./conformancerestresourceinteraction.schema.js'),
				),
			),
			description: 'Identifies a restful operation supported by the solution.',
		},
		_versioning: {
			type: require('./element.schema.js'),
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
			type: require('./element.schema.js'),
			description:
				'A flag for whether the server is able to return past versions as part of the vRead operation.',
		},
		readHistory: {
			type: GraphQLBoolean,
			description:
				'A flag for whether the server is able to return past versions as part of the vRead operation.',
		},
		_updateCreate: {
			type: require('./element.schema.js'),
			description:
				'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.',
		},
		updateCreate: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.',
		},
		_conditionalCreate: {
			type: require('./element.schema.js'),
			description:
				'A flag that indicates that the server supports conditional create.',
		},
		conditionalCreate: {
			type: GraphQLBoolean,
			description:
				'A flag that indicates that the server supports conditional create.',
		},
		_conditionalUpdate: {
			type: require('./element.schema.js'),
			description:
				'A flag that indicates that the server supports conditional update.',
		},
		conditionalUpdate: {
			type: GraphQLBoolean,
			description:
				'A flag that indicates that the server supports conditional update.',
		},
		_conditionalDelete: {
			type: require('./element.schema.js'),
			description:
				'A code that indicates how the server supports conditional delete.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conditional-delete-status
		conditionalDelete: {
			type: CodeScalar,
			description:
				'A code that indicates how the server supports conditional delete.',
		},
		_searchInclude: {
			type: require('./element.schema.js'),
			description: 'A list of _include values supported by the server.',
		},
		searchInclude: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of _include values supported by the server.',
		},
		_searchRevInclude: {
			type: require('./element.schema.js'),
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
				require('./conformancerestresourcesearchparam.schema.js'),
			),
			description:
				'Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.',
		},
	}),
});
