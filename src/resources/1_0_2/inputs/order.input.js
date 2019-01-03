const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let OrderResourceInputType = new GraphQLEnumType({
	name: 'OrderResourceInputType',
	values: {
		Order: { value: 'Order' },
	},
});

/**
 * @name exports
 * @summary Order Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Order_Input',
	description: 'Base StructureDefinition for Order Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(OrderResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description:
					'Identifiers assigned to this order by the orderer or by the receiver.',
			},
			date: {
				type: DateTimeScalar,
				description: 'When the order was made.',
			},
			_date: {
				type: require('./element.input'),
				description: 'When the order was made.',
			},
			subject: {
				type: require('./reference.input'),
				description: 'Patient this order is about.',
			},
			source: {
				type: require('./reference.input'),
				description: 'Who initiated the order.',
			},
			target: {
				type: require('./reference.input'),
				description: 'Who is intended to fulfill the order.',
			},
			reasonCodeableConcept: {
				type: require('./codeableconcept.input'),
				description: 'Text - why the order was made.',
			},
			reasonReference: {
				type: require('./reference.input'),
				description: 'Text - why the order was made.',
			},
			when: {
				type: require('./orderwhen.input'),
				description: 'When order should be fulfilled.',
			},
			detail: {
				type: new GraphQLList(new GraphQLNonNull(require('./reference.input'))),
				description: 'What action is being ordered.',
			},
		}),
});
