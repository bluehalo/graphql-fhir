const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DocumentReferenceContextRelated Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentReferenceContextRelated',
	description: 'Related identifiers or resources associated with the DocumentReference.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.'
		},
		ref: {
			type: require('./reference.schema'),
			description: 'Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.'
		}
	})
});
