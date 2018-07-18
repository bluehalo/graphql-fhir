const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary HealthcareServiceServiceType Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HealthcareServiceServiceType_Input',
	description: 'A specific type of service that may be delivered or performed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The specific type of service being delivered or performed.'
		},
		specialty: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Collection of specialties handled by the service site. This is more of a medical term.'
		}
	})
});
