const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let OrderResourceType = new GraphQLEnumType({
	name: 'OrderResourceType',
	values: {
		Order: { value: 'Order' }
	}
});

/**
 * @name exports
 * @summary Order Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Order',
	description: 'Base StructureDefinition for Order Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(OrderResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers assigned to this order by the orderer or by the receiver.'
		},
		date: {
			type: DateTimeScalar,
			description: 'When the order was made.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'When the order was made.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'Patient this order is about.'
		},
		source: {
			type: require('./reference.schema'),
			description: 'Who initiated the order.'
		},
		target: {
			type: require('./reference.schema'),
			description: 'Who is intended to fulfill the order.'
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Text - why the order was made.'
		},
		reasonReference: {
			type: require('./reference.schema'),
			description: 'Text - why the order was made.'
		},
		when: {
			type: require('./orderwhen.schema'),
			description: 'When order should be fulfilled.'
		},
		detail: {
			type: new GraphQLList(new GraphQLNonNull(require('./reference.schema'))),
			description: 'What action is being ordered.'
		}
	})
});
