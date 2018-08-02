const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DocumentReferenceContextRelated Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReferenceContextRelated_Input',
	description: 'Related identifiers or resources associated with the DocumentReference.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.'
		},
		ref: {
			type: require('./reference.input'),
			description: 'Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.'
		}
	})
});
