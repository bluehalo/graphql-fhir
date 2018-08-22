const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConditionEvidence Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConditionEvidence_Input',
	description: 'Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/manifestation-or-symptom
		code: {
			type: require('./codeableconcept.input'),
			description: 'A manifestation or symptom that led to the recording of this condition.'
		},
		detail: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Links to other relevant information, including pathology reports.'
		}
	})
});
