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
 * @summary CodeSystemproperty Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemproperty_Input',
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
				'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.',
		},
		_uri: {
			type: require('./element.input.js'),
			description:
				'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.',
		},
		uri: {
			type: UriScalar,
			description:
				'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A description of the property- why it is defined, and how its value might be used.',
		},
		description: {
			type: GraphQLString,
			description:
				'A description of the property- why it is defined, and how its value might be used.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				"The type of the property value. Properties of type 'code' contain a code defined by the code system (e.g. a reference to another defined concept).",
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"The type of the property value. Properties of type 'code' contain a code defined by the code system (e.g. a reference to another defined concept).",
		},
	}),
});
