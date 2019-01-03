const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Order.when Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OrderWhen',
	description: 'When order should be fulfilled.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Code specifies when request should be done. The code may simply be a priority code.'
		},
		schedule: {
			type: require('./timing.schema'),
			description: 'A formal schedule.'
		}
	})
});
