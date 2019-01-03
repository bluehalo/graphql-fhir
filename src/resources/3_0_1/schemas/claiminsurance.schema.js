const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Claim.insurance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimInsurance',
	description: 'Financial instrument by which payment information for health care.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of coverage which serves to provide a link and convey coordination of benefit order.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'Sequence of coverage which serves to provide a link and convey coordination of benefit order.'
		},
		focal: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.'
		},
		_focal: {
			type: require('./element.schema'),
			description: 'A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.'
		},
		coverage: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Reference to the program or plan identification, underwriter or payor.'
		},
		businessArrangement: {
			type: GraphQLString,
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		_businessArrangement: {
			type: require('./element.schema'),
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		preAuthRef: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of references from the Insurer to which these services pertain.'
		},
		_preAuthRef: {
			type: require('./element.schema'),
			description: 'A list of references from the Insurer to which these services pertain.'
		},
		claimResponse: {
			type: require('./reference.schema'),
			description: 'The Coverages adjudication details.'
		}
	})
});
