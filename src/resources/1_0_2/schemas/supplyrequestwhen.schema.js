const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary SupplyRequest.when Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyRequestWhen',
	description: 'When the request should be fulfilled.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-when
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Code indicating when the request should be fulfilled.'
		},
		schedule: {
			type: require('./timing.schema'),
			description: 'Formal fulfillment schedule.'
		}
	})
});
