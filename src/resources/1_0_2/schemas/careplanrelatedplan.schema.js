const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CarePlanrelatedPlan Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlanrelatedPlan',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'Identifies the type of relationship this plan has to the target plan.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-plan-relationship
		code: {
			type: CodeScalar,
			description:
				'Identifies the type of relationship this plan has to the target plan.',
		},
		plan: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CarePlanrelatedPlanplan_plan_Union',
					description:
						'A reference to the plan to which a relationship is asserted.',
					types: () => [require('./careplan.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to the plan to which a relationship is asserted.',
		},
	}),
});
