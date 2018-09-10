const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Immunization.explanation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationExplanation_Input',
	description: 'Reasons why a vaccine was or was not administered.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-reason
		reason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Reasons why a vaccine was administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/no-immunization-reason
		reasonNotGiven: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Reason why a vaccine was not administered.'
		}
	})
});
