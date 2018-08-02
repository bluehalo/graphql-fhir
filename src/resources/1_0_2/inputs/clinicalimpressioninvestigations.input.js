const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClinicalImpressionInvestigations Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClinicalImpressionInvestigations_Input',
	description: 'One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/investigation-sets
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'A name/code for the group (\'set\') of investigations. Typically, this will be something like \'signs\', \'symptoms\', \'clinical\', \'diagnostic\', but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.'
		},
		item: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A record of a specific investigation that was undertaken.'
		}
	})
});
