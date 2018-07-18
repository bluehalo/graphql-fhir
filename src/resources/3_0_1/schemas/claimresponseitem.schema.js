const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimResponseItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseItem',
	description: 'The first tier service adjudications for submitted services.',
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
		adjudication: {
			type: new GraphQLList(require('./claimresponseitemadjudication.schema')),
			description: 'The adjudication results.'
		},
		detail: {
			type: new GraphQLList(require('./claimresponseitemdetail.schema')),
			description: 'The second tier service adjudications for submitted services.'
		}
	})
});
