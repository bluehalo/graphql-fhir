const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CapabilityStatementSoftware Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementSoftware',
	description: 'Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Name software is known by.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Name software is known by.'
		},
		version: {
			type: GraphQLString,
			description: 'The version identifier for the software covered by this statement.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The version identifier for the software covered by this statement.'
		},
		releaseDate: {
			type: DateTimeScalar,
			description: 'Date this version of the software was released.'
		},
		_releaseDate: {
			type: require('./element.schema'),
			description: 'Date this version of the software was released.'
		}
	})
});
