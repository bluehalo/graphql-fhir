const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary UsageContext Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'UsageContext_Input',
	description: 'Base StructureDefinition for UsageContext Type.',
	fields: () => extendSchema(require('./element.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/usage-context-type
		code: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'A code that identifies the type of context being specified by this usage context.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.input')),
			description: 'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueRange: {
			type: new GraphQLNonNull(require('./range.input')),
			description: 'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.'
		}
	})
});
