const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimCoverage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimCoverage',
	description: 'Financial instrument by which payment information for health care.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line item.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'A service line item.'
		},
		focal: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.'
		},
		_focal: {
			type: require('./element.schema'),
			description: 'The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.'
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
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/relationship
		relationship: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The relationship of the patient to the subscriber.'
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
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.schema'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		}
	})
});
