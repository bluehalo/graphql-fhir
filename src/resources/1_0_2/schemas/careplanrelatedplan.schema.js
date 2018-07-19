const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CarePlanRelatedPlan Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlanRelatedPlan',
	description: 'Identifies CarePlans with some sort of formal relationship to the current plan.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-relationship
		code: {
			type: CodeScalar,
			description: 'Identifies the type of relationship this plan has to the target plan.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Identifies the type of relationship this plan has to the target plan.'
		},
		plan: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A reference to the plan to which a relationship is asserted.'
		}
	})
});
