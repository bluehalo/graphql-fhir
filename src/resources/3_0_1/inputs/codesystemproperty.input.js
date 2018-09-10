const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CodeSystem.property Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemProperty_Input',
	description: 'A property defines an additional slot through which additional information can be provided about a concept.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.'
		},
		_code: {
			type: require('./element.input'),
			description: 'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.'
		},
		uri: {
			type: UriScalar,
			description: 'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.'
		},
		_uri: {
			type: require('./element.input'),
			description: 'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.'
		},
		description: {
			type: GraphQLString,
			description: 'A description of the property- why it is defined, and how its value might be used.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A description of the property- why it is defined, and how its value might be used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/concept-property-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of the property value. Properties of type \'code\' contain a code defined by the code system (e.g. a reference to anotherr defined concept).'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of the property value. Properties of type \'code\' contain a code defined by the code system (e.g. a reference to anotherr defined concept).'
		}
	})
});
