const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Group.characteristic Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GroupCharacteristic',
	description: 'Identifies the traits shared by members of the group.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'A code that identifies the kind of trait being asserted.'
		},
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.'
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.'
		},
		_valueBoolean: {
			type: require('./element.schema'),
			description: 'The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.'
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.schema')),
			description: 'The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.'
		},
		valueRange: {
			type: new GraphQLNonNull(require('./range.schema')),
			description: 'The value of the trait that holds (or does not hold - see \'exclude\') for members of the group.'
		},
		exclude: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'If true, indicates the characteristic is one that is NOT held by members of the group.'
		},
		_exclude: {
			type: require('./element.schema'),
			description: 'If true, indicates the characteristic is one that is NOT held by members of the group.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.'
		}
	})
});
