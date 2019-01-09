const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ExplanationOfBenefitbenefitBalance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitbenefitBalance_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Code to identify the general type of benefits under which products and services are provided.',
		},
		_excluded: {
			type: require('./element.input.js'),
			description:
				'True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.',
		},
		excluded: {
			type: GraphQLBoolean,
			description:
				'True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.',
		},
		_name: {
			type: require('./element.input.js'),
			description: 'A short name or tag for the benefit.',
		},
		name: {
			type: GraphQLString,
			description: 'A short name or tag for the benefit.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'A richer description of the benefit or services covered.',
		},
		description: {
			type: GraphQLString,
			description: 'A richer description of the benefit or services covered.',
		},
		network: {
			type: require('./codeableconcept.input.js'),
			description:
				'Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.',
		},
		unit: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates if the benefits apply to an individual or to the family.',
		},
		term: {
			type: require('./codeableconcept.input.js'),
			description:
				"The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.",
		},
		financial: {
			type: new GraphQLList(
				require('./explanationofbenefitbenefitbalancefinancial.input.js'),
			),
			description: 'Benefits Used to date.',
		},
	}),
});
