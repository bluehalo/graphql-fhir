const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponseItemDetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseItemDetail',
	description: 'The second tier service adjudications for submitted services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequenceLinkId: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequenceLinkId: {
			type: require('./element.schema'),
			description: 'A service line number.'
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.'
		},
		_noteNumber: {
			type: require('./element.schema'),
			description: 'A list of note references to the notes provided below.'
		},
		subDetail: {
			type: new GraphQLList(require('./claimresponseitemdetailsubdetail.schema')),
			description: 'The third tier service adjudications for submitted services.'
		}
	})
});
