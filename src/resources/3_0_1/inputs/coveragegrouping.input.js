const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Coveragegrouping Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Coveragegrouping_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_group: {
			type: require('./element.input.js'),
			description:
				'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.',
		},
		group: {
			type: GraphQLString,
			description:
				'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.',
		},
		_groupDisplay: {
			type: require('./element.input.js'),
			description: 'A short description for the group.',
		},
		groupDisplay: {
			type: GraphQLString,
			description: 'A short description for the group.',
		},
		_subGroup: {
			type: require('./element.input.js'),
			description:
				'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.',
		},
		subGroup: {
			type: GraphQLString,
			description:
				'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.',
		},
		_subGroupDisplay: {
			type: require('./element.input.js'),
			description: 'A short description for the subgroup.',
		},
		subGroupDisplay: {
			type: GraphQLString,
			description: 'A short description for the subgroup.',
		},
		_plan: {
			type: require('./element.input.js'),
			description:
				'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.',
		},
		plan: {
			type: GraphQLString,
			description:
				'Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.',
		},
		_planDisplay: {
			type: require('./element.input.js'),
			description: 'A short description for the plan.',
		},
		planDisplay: {
			type: GraphQLString,
			description: 'A short description for the plan.',
		},
		_subPlan: {
			type: require('./element.input.js'),
			description:
				'Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.',
		},
		subPlan: {
			type: GraphQLString,
			description:
				'Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.',
		},
		_subPlanDisplay: {
			type: require('./element.input.js'),
			description: 'A short description for the subplan.',
		},
		subPlanDisplay: {
			type: GraphQLString,
			description: 'A short description for the subplan.',
		},
		_class: {
			type: require('./element.input.js'),
			description:
				'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.',
		},
		class: {
			type: GraphQLString,
			description:
				'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.',
		},
		_classDisplay: {
			type: require('./element.input.js'),
			description: 'A short description for the class.',
		},
		classDisplay: {
			type: GraphQLString,
			description: 'A short description for the class.',
		},
		_subClass: {
			type: require('./element.input.js'),
			description:
				'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.',
		},
		subClass: {
			type: GraphQLString,
			description:
				'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.',
		},
		_subClassDisplay: {
			type: require('./element.input.js'),
			description: 'A short description for the subclass.',
		},
		subClassDisplay: {
			type: GraphQLString,
			description: 'A short description for the subclass.',
		},
	}),
});
