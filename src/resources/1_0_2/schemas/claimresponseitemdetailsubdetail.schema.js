const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ClaimResponse.item.detail.subDetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseItemDetailSubDetail',
	description: 'The third tier service adjudications for submitted services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequenceLinkId: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequenceLinkId: {
			type: require('./element.schema'),
			description: 'A service line number.'
		},
		adjudication: {
			type: new GraphQLList(require('./claimresponseitemdetailsubdetailadjudication.schema')),
			description: 'The adjudications results.'
		}
	})
});
