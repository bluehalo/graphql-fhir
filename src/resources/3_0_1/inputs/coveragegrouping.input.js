const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CoverageGrouping Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CoverageGrouping_Input',
	description: 'A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		group: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.'
		},
		_group: {
			type: require('./element.input'),
			description: 'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.'
		},
		groupDisplay: {
			type: GraphQLString,
			description: 'A short description for the group.'
		},
		_groupDisplay: {
			type: require('./element.input'),
			description: 'A short description for the group.'
		},
		subGroup: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.'
		},
		_subGroup: {
			type: require('./element.input'),
			description: 'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.'
		},
		subGroupDisplay: {
			type: GraphQLString,
			description: 'A short description for the subgroup.'
		},
		_subGroupDisplay: {
			type: require('./element.input'),
			description: 'A short description for the subgroup.'
		},
		plan: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.'
		},
		_plan: {
			type: require('./element.input'),
			description: 'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.'
		},
		planDisplay: {
			type: GraphQLString,
			description: 'A short description for the plan.'
		},
		_planDisplay: {
			type: require('./element.input'),
			description: 'A short description for the plan.'
		},
		subPlan: {
			type: GraphQLString,
			description: 'Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.'
		},
		_subPlan: {
			type: require('./element.input'),
			description: 'Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.'
		},
		subPlanDisplay: {
			type: GraphQLString,
			description: 'A short description for the subplan.'
		},
		_subPlanDisplay: {
			type: require('./element.input'),
			description: 'A short description for the subplan.'
		},
		class: {
			type: GraphQLString,
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.'
		},
		_class: {
			type: require('./element.input'),
			description: 'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.'
		},
		classDisplay: {
			type: GraphQLString,
			description: 'A short description for the class.'
		},
		_classDisplay: {
			type: require('./element.input'),
			description: 'A short description for the class.'
		},
		subClass: {
			type: GraphQLString,
			description: 'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.'
		},
		_subClass: {
			type: require('./element.input'),
			description: 'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.'
		},
		subClassDisplay: {
			type: GraphQLString,
			description: 'A short description for the subclass.'
		},
		_subClassDisplay: {
			type: require('./element.input'),
			description: 'A short description for the subclass.'
		}
	})
});
