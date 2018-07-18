const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary SubstanceIngredient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceIngredient',
	description: 'A substance can be composed of other substances.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		quantity: {
			type: require('./ratio.schema'),
			description: 'The amount of the ingredient in the substance - a concentration ratio.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substanceCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Another substance that is a component of this substance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substanceReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Another substance that is a component of this substance.'
		}
	})
});
