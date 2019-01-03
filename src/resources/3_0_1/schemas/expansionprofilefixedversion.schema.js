const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ExpansionProfile.fixedVersion Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExpansionProfileFixedVersion',
	description: 'Fix use of a particular code system to a particular version.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			system: {
				type: new GraphQLNonNull(UriScalar),
				description: 'The specific system for which to fix the version.',
			},
			_system: {
				type: require('./element.schema'),
				description: 'The specific system for which to fix the version.',
			},
			version: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'The version of the code system from which codes in the expansion should be included.',
			},
			_version: {
				type: require('./element.schema'),
				description:
					'The version of the code system from which codes in the expansion should be included.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/system-version-processing-mode
			mode: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.',
			},
			_mode: {
				type: require('./element.schema'),
				description:
					'How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.',
			},
		}),
});
