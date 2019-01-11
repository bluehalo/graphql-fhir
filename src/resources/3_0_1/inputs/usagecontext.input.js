const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary UsageContext Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'UsageContext_Input',
	description: 'Base StructureDefinition for UsageContext Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/usage-context-type
		code: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'A code that identifies the type of context being specified by this usage context.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.input.js')),
			description:
				'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueRange: {
			type: new GraphQLNonNull(require('./range.input.js')),
			description:
				'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
		},
	}),
});
