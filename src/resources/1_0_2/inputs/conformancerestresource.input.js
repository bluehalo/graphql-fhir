const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLBoolean, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Conformance.rest.resource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceRestResource_Input',
	description: 'A specification of the restful capabilities of the solution for a specific resource type.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A type of resource exposed via the restful interface.'
		},
		_type: {
			type: require('./element.input'),
			description: 'A type of resource exposed via the restful interface.'
		},
		profile: {
			type: require('./reference.input'),
			description: 'A specification of the profile that describes the solution\'s overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles]{profiling.html#profile-uses}.'
		},
		interaction: {
			type: new GraphQLList(new GraphQLNonNull(require('./conformancerestresourceinteraction.input'))),
			description: 'Identifies a restful operation supported by the solution.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/versioning-policy
		versioning: {
			type: CodeScalar,
			description: 'This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is \'versioned-update\', then the server supports all the versioning features, including using e-tags for version integrity in the API.'
		},
		_versioning: {
			type: require('./element.input'),
			description: 'This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is \'versioned-update\', then the server supports all the versioning features, including using e-tags for version integrity in the API.'
		},
		readHistory: {
			type: GraphQLBoolean,
			description: 'A flag for whether the server is able to return past versions as part of the vRead operation.'
		},
		_readHistory: {
			type: require('./element.input'),
			description: 'A flag for whether the server is able to return past versions as part of the vRead operation.'
		},
		updateCreate: {
			type: GraphQLBoolean,
			description: 'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.'
		},
		_updateCreate: {
			type: require('./element.input'),
			description: 'A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.'
		},
		conditionalCreate: {
			type: GraphQLBoolean,
			description: 'A flag that indicates that the server supports conditional create.'
		},
		_conditionalCreate: {
			type: require('./element.input'),
			description: 'A flag that indicates that the server supports conditional create.'
		},
		conditionalUpdate: {
			type: GraphQLBoolean,
			description: 'A flag that indicates that the server supports conditional update.'
		},
		_conditionalUpdate: {
			type: require('./element.input'),
			description: 'A flag that indicates that the server supports conditional update.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/conditional-delete-status
		conditionalDelete: {
			type: CodeScalar,
			description: 'A code that indicates how the server supports conditional delete.'
		},
		_conditionalDelete: {
			type: require('./element.input'),
			description: 'A code that indicates how the server supports conditional delete.'
		},
		searchInclude: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of _include values supported by the server.'
		},
		_searchInclude: {
			type: require('./element.input'),
			description: 'A list of _include values supported by the server.'
		},
		searchRevInclude: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of _revinclude (reverse include) values supported by the server.'
		},
		_searchRevInclude: {
			type: require('./element.input'),
			description: 'A list of _revinclude (reverse include) values supported by the server.'
		},
		searchParam: {
			type: new GraphQLList(require('./conformancerestresourcesearchparam.input')),
			description: 'Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.'
		}
	})
});
