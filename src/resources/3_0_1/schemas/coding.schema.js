const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Coding Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Coding',
	description: 'Base StructureDefinition for Coding Type.',
	fields: () =>
		extendSchema(require('./element.schema'), {
			system: {
				type: UriScalar,
				description:
					'The identification of the code system that defines the meaning of the symbol in the code.',
			},
			_system: {
				type: require('./element.schema'),
				description:
					'The identification of the code system that defines the meaning of the symbol in the code.',
			},
			version: {
				type: GraphQLString,
				description:
					'The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.',
			},
			_version: {
				type: require('./element.schema'),
				description:
					'The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.',
			},
			code: {
				type: CodeScalar,
				description:
					'A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).',
			},
			_code: {
				type: require('./element.schema'),
				description:
					'A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).',
			},
			display: {
				type: GraphQLString,
				description:
					'A representation of the meaning of the code in the system, following the rules of the system.',
			},
			_display: {
				type: require('./element.schema'),
				description:
					'A representation of the meaning of the code in the system, following the rules of the system.',
			},
			userSelected: {
				type: GraphQLBoolean,
				description:
					'Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).',
			},
			_userSelected: {
				type: require('./element.schema'),
				description:
					'Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).',
			},
		}),
});
