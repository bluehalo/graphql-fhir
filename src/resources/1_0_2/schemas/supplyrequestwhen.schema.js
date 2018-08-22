const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SupplyRequestWhen Schema
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
