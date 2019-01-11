const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary CodeSystemproperty Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeSystemproperty',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.',
		},
		_uri: {
			type: require('./element.schema.js'),
			description:
				'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.',
		},
		uri: {
			type: UriScalar,
			description:
				'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A description of the property- why it is defined, and how its value might be used.',
		},
		description: {
			type: GraphQLString,
			description:
				'A description of the property- why it is defined, and how its value might be used.',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				"The type of the property value. Properties of type 'code' contain a code defined by the code system (e.g. a reference to anotherr defined concept).",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/concept-property-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"The type of the property value. Properties of type 'code' contain a code defined by the code system (e.g. a reference to anotherr defined concept).",
		},
	}),
});
