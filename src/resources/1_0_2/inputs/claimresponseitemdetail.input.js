const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



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
		adjudication: {
			type: new GraphQLList(require('./claimresponseitemdetailadjudication.input')),
			description: 'The adjudications results.'
		},
		subDetail: {
			type: new GraphQLList(require('./claimresponseitemdetailsubdetail.input')),
			description: 'The third tier service adjudications for submitted services.'
		}
	})
});
