const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CoverageEligibilityRequestinsurance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CoverageEligibilityRequestinsurance_Input',
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
		_focal: {
			type: require('./element.input.js'),
			description:
				'A flag to indicate that this Coverage is to be used for evaluation of this request when set to true.',
		},
		focal: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that this Coverage is to be used for evaluation of this request when set to true.',
		},
		coverage: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				"Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.",
		},
		_businessArrangement: {
			type: require('./element.input.js'),
			description:
				'A business agreement number established between the provider and the insurer for special business processing purposes.',
		},
		businessArrangement: {
			type: GraphQLString,
			description:
				'A business agreement number established between the provider and the insurer for special business processing purposes.',
		},
	}),
});
