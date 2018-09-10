const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CarePlan.relatedPlan Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CarePlanRelatedPlan_Input',
	description: 'Identifies CarePlans with some sort of formal relationship to the current plan.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-relationship
		code: {
			type: CodeScalar,
			description: 'Identifies the type of relationship this plan has to the target plan.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Identifies the type of relationship this plan has to the target plan.'
		},
		plan: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to the plan to which a relationship is asserted.'
		}
	})
});
