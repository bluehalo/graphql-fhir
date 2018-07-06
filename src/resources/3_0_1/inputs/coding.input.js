const {
	GraphQLInputObjectType,
	GraphQLBoolean,
	GraphQLString
} = require('graphql');

// Scalars
const CodeScalar = require('../scalars/code.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Coding Fields
 */
let CodingInput = new GraphQLInputObjectType({
	name: 'CodingInput',
	description: 'A reference to a code defined by a terminology system.',
	fields: () => extendSchema(require('./element.input'), {
		system: {
			type: GraphQLString,
			description: 'The identification of the code system that defines the meaning of the symbol in the code.'
		},
		_system: {
			type: require('./extension.input'),
			description: 'Extensions for system'
		},
		version: {
			type: GraphQLString,
			description: 'The version of the code system which was used when choosing this code.'
				+ ' Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions.'
				+ ' However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.'
		},
		_version: {
			type: require('./extension.input'),
			description: 'Extensions for version'
		},
		code: {
			type: CodeScalar,
			description: 'A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).'
		},
		_code: {
			type: require('./extension.input'),
			description: 'Extensions for code'
		},
		display: {
			type: GraphQLString,
			description: 'A representation of the meaning of the code in the system, following the rules of the system.'
		},
		_display: {
			type: require('./extension.input'),
			description: 'Extensions for display'
		},
		userSelected: {
			type: GraphQLBoolean,
			description: 'Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).'
		},
		_userSelected: {
			type: require('./extension.input'),
			description: 'Extensions for userSelected'
		}
	})
});

module.exports = CodingInput;
