const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CodeSystemProperty Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeSystemProperty',
	description: 'A property defines an additional slot through which additional information can be provided about a concept.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.'
		},
		uri: {
			type: UriScalar,
			description: 'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.'
		},
		_uri: {
			type: require('./element.schema'),
			description: 'Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.'
		},
		description: {
			type: GraphQLString,
			description: 'A description of the property- why it is defined, and how its value might be used.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A description of the property- why it is defined, and how its value might be used.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/concept-property-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of the property value. Properties of type \'code\' contain a code defined by the code system (e.g. a reference to anotherr defined concept).'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of the property value. Properties of type \'code\' contain a code defined by the code system (e.g. a reference to anotherr defined concept).'
		}
	})
});
