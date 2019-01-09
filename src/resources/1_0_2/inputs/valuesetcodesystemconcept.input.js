const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ValueSetcodeSystemconcept Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetcodeSystemconcept_Input',
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
		_code: {
			type: require('./element.input.js'),
			description:
				'A code - a text symbol - that uniquely identifies the concept within the code system.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code - a text symbol - that uniquely identifies the concept within the code system.',
		},
		_abstract: {
			type: require('./element.input.js'),
			description: 'If this code is not for use as a real concept.',
		},
		abstract: {
			type: GraphQLBoolean,
			description: 'If this code is not for use as a real concept.',
		},
		_display: {
			type: require('./element.input.js'),
			description:
				'A human readable string that is the recommended default way to present this concept to a user.',
		},
		display: {
			type: GraphQLString,
			description:
				'A human readable string that is the recommended default way to present this concept to a user.',
		},
		_definition: {
			type: require('./element.input.js'),
			description:
				'The formal definition of the concept. The value set resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.',
		},
		definition: {
			type: GraphQLString,
			description:
				'The formal definition of the concept. The value set resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.',
		},
		designation: {
			type: new GraphQLList(
				require('./valuesetcodesystemconceptdesignation.input.js'),
			),
			description:
				'Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.',
		},
	}),
});
