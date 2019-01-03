const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ClaimResponse.addItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseAddItem',
	description: 'The first tier service adjudications for payor added services.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			sequenceLinkId: {
				type: new GraphQLList(PositiveIntScalar),
				description:
					'List of input service items which this service line is intended to replace.',
			},
			_sequenceLinkId: {
				type: require('./element.schema'),
				description:
					'List of input service items which this service line is intended to replace.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
			service: {
				type: new GraphQLNonNull(require('./coding.schema')),
				description:
					'A code to indicate the Professional Service or Product supplied.',
			},
			fee: {
				type: require('./quantity.schema'),
				description:
					'The fee charged for the professional service or product..',
			},
			noteNumberLinkId: {
				type: new GraphQLList(PositiveIntScalar),
				description: 'A list of note references to the notes provided below.',
			},
			_noteNumberLinkId: {
				type: require('./element.schema'),
				description: 'A list of note references to the notes provided below.',
			},
			adjudication: {
				type: new GraphQLList(
					require('./claimresponseadditemadjudication.schema'),
				),
				description: 'The adjudications results.',
			},
			detail: {
				type: new GraphQLList(require('./claimresponseadditemdetail.schema')),
				description:
					'The second tier service adjudications for payor added services.',
			},
		}),
});
