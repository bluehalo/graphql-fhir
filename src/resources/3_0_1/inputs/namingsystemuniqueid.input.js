const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary NamingSystemUniqueId Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NamingSystemUniqueId_Input',
	description: 'Indicates how the system may be identified when referenced in electronic exchange.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/namingsystem-identifier-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the unique identifier scheme used for this particular identifier.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Identifies the unique identifier scheme used for this particular identifier.'
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The string that should be sent over the wire to identify the code system or identifier system.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The string that should be sent over the wire to identify the code system or identifier system.'
		},
		preferred: {
			type: GraphQLBoolean,
			description: 'Indicates whether this identifier is the \'preferred\' identifier of this type.'
		},
		_preferred: {
			type: require('./element.input'),
			description: 'Indicates whether this identifier is the \'preferred\' identifier of this type.'
		},
		comment: {
			type: GraphQLString,
			description: 'Notes about the past or intended usage of this identifier.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'Notes about the past or intended usage of this identifier.'
		},
		period: {
			type: require('./period.input'),
			description: 'Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.'
		}
	})
});
