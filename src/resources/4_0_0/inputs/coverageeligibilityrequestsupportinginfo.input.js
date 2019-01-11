const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary CoverageEligibilityRequestsupportingInfo Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CoverageEligibilityRequestsupportingInfo_Input',
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
		_sequence: {
			type: require('./element.input.js'),
			description:
				'A number to uniquely identify supporting information entries.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'A number to uniquely identify supporting information entries.',
		},
		information: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.',
		},
		_appliesToAll: {
			type: require('./element.input.js'),
			description:
				'The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.',
		},
		appliesToAll: {
			type: GraphQLBoolean,
			description:
				'The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.',
		},
	}),
});
