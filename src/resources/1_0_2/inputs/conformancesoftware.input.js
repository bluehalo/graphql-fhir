const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Conformance.software Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceSoftware_Input',
	description: 'Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Name software is known by.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Name software is known by.'
		},
		version: {
			type: GraphQLString,
			description: 'The version identifier for the software covered by this statement.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The version identifier for the software covered by this statement.'
		},
		releaseDate: {
			type: DateTimeScalar,
			description: 'Date this version of the software released.'
		},
		_releaseDate: {
			type: require('./element.input'),
			description: 'Date this version of the software released.'
		}
	})
});
