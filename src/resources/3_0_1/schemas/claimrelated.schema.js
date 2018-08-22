const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimRelated Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimRelated',
	description: 'Other claims which are related to this claim such as prior claim versions or for related services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		claim: {
			type: require('./reference.schema'),
			description: 'Other claims which are related to this claim such as prior claim versions or for related services.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/related-claim-relationship
		relationship: {
			type: require('./codeableconcept.schema'),
			description: 'For example prior or umbrella.'
		},
		reference: {
			type: require('./identifier.schema'),
			description: 'An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # .'
		}
	})
});
