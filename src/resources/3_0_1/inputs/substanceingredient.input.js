const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary SubstanceIngredient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubstanceIngredient_Input',
	description: 'A substance can be composed of other substances.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		quantity: {
			type: require('./ratio.input'),
			description: 'The amount of the ingredient in the substance - a concentration ratio.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substanceCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Another substance that is a component of this substance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substanceReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Another substance that is a component of this substance.'
		}
	})
});
