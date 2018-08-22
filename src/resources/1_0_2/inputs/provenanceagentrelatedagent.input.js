const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProvenanceAgentRelatedAgent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProvenanceAgentRelatedAgent_Input',
	description: 'A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another\'s behest.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-RoleLinkType
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The type of relationship between agents.'
		},
		target: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An internal reference to another agent listed in this provenance by its identifier.'
		},
		_target: {
			type: require('./element.input'),
			description: 'An internal reference to another agent listed in this provenance by its identifier.'
		}
	})
});
