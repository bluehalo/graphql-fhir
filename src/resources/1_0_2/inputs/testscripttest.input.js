const {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary TestScripttest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScripttest_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		_name: {
			type: require('./element.input.js'),
			description:
				'The name of this test used for tracking/logging purposes by test engines.',
		},
		name: {
			type: GraphQLString,
			description:
				'The name of this test used for tracking/logging purposes by test engines.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A short description of the test used by test engines for tracking and reporting purposes.',
		},
		description: {
			type: GraphQLString,
			description:
				'A short description of the test used by test engines for tracking and reporting purposes.',
		},
		action: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./testscripttestaction.input.js')),
			),
			description: 'Action would contain either an operation or an assertion.',
		},
	}),
});
