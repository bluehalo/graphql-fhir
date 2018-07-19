const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConditionEvidence Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConditionEvidence',
	description: 'Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/manifestation-or-symptom
		code: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A manifestation or symptom that led to the recording of this condition.'
		},
		detail: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Links to other relevant information, including pathology reports.'
		}
	})
});
