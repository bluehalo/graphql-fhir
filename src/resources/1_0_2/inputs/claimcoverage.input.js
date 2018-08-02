const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimCoverage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimCoverage_Input',
	description: 'Financial instrument by which payment information for health care.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line item.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'A service line item.'
		},
		focal: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.'
		},
		_focal: {
			type: require('./element.input'),
			description: 'The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.'
		},
		coverage: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Reference to the program or plan identification, underwriter or payor.'
		},
		businessArrangement: {
			type: GraphQLString,
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		_businessArrangement: {
			type: require('./element.input'),
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/relationship
		relationship: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The relationship of the patient to the subscriber.'
		},
		preAuthRef: {
			type: new GraphQLList(GraphQLString),
			description: 'A list of references from the Insurer to which these services pertain.'
		},
		_preAuthRef: {
			type: require('./element.input'),
			description: 'A list of references from the Insurer to which these services pertain.'
		},
		claimResponse: {
			type: require('./reference.input'),
			description: 'The Coverages adjudication details.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		}
	})
});
