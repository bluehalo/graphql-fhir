const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConformanceMessaging Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConformanceMessaging',
	description: 'A description of the messaging capabilities of the solution.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		endpoint: {
			type: new GraphQLList(require('./conformancemessagingendpoint.schema')),
			description: 'An endpoint (network accessible address) to which messages and/or replies are to be sent.'
		},
		reliableCache: {
			type: UnsignedIntScalar,
			description: 'Length if the receiver\'s reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).'
		},
		_reliableCache: {
			type: require('./element.schema'),
			description: 'Length if the receiver\'s reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).'
		},
		documentation: {
			type: GraphQLString,
			description: 'Documentation about the system\'s messaging capabilities for this endpoint not otherwise documented by the conformance statement.  For example, process for becoming an authorized messaging exchange partner.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'Documentation about the system\'s messaging capabilities for this endpoint not otherwise documented by the conformance statement.  For example, process for becoming an authorized messaging exchange partner.'
		},
		event: {
			type: new GraphQLList(new GraphQLNonNull(require('./conformancemessagingevent.schema'))),
			description: 'A description of the solution\'s support for an event at this end-point.'
		}
	})
});
