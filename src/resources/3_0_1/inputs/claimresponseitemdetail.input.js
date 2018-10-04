const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponse.item.detail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseItemDetail_Input',
	description: 'The second tier service adjudications for submitted services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequenceLinkId: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequenceLinkId: {
			type: require('./element.input'),
			description: 'A service line number.'
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.'
		},
		_noteNumber: {
			type: require('./element.input'),
			description: 'A list of note references to the notes provided below.'
		},
		subDetail: {
			type: new GraphQLList(require('./claimresponseitemdetailsubdetail.input')),
			description: 'The third tier service adjudications for submitted services.'
		}
	})
});
