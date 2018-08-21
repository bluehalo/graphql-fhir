const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImmunizationExplanation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationExplanation',
	description: 'Reasons why a vaccine was or was not administered.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-reason
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Reasons why a vaccine was administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/no-immunization-reason
		reasonNotGiven: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Reason why a vaccine was not administered.'
		}
	})
});
