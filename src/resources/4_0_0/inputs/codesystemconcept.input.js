const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CodeSystemconcept Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemconcept_Input',
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
				'The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.',
		},
		definition: {
			type: GraphQLString,
			description:
				'The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.',
		},
		designation: {
			type: new GraphQLList(require('./codesystemconceptdesignation.input.js')),
			description:
				'Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.',
		},
		property: {
			type: new GraphQLList(require('./codesystemconceptproperty.input.js')),
			description: 'A property value for this concept.',
		},
	}),
});
