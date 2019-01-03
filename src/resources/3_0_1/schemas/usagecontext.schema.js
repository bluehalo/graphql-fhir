const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary UsageContext Schema
 */
module.exports = new GraphQLObjectType({
	name: 'UsageContext',
	description: 'Base StructureDefinition for UsageContext Type.',
	fields: () => extendSchema(require('./element.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/usage-context-type
		code: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'A code that identifies the type of context being specified by this usage context.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.schema')),
			description: 'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		valueRange: {
			type: new GraphQLNonNull(require('./range.schema')),
			description: 'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.'
		}
	})
});
