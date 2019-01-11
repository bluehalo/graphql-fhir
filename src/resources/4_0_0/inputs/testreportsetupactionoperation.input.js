const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary TestReportsetupactionoperation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportsetupactionoperation_Input',
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
		_result: {
			type: require('./element.input.js'),
			description: 'The result of this operation.',
		},
		result: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The result of this operation.',
		},
		_message: {
			type: require('./element.input.js'),
			description: 'An explanatory message associated with the result.',
		},
		message: {
			type: GraphQLString,
			description: 'An explanatory message associated with the result.',
		},
		_detail: {
			type: require('./element.input.js'),
			description: 'A link to further details on the result.',
		},
		detail: {
			type: UriScalar,
			description: 'A link to further details on the result.',
		},
	}),
});
