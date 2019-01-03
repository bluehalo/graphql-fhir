const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let OrderResponseResourceType = new GraphQLEnumType({
	name: 'OrderResponseResourceType',
	values: {
		OrderResponse: { value: 'OrderResponse' },
	},
});

/**
 * @name exports
 * @summary OrderResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OrderResponse',
	description: 'Base StructureDefinition for OrderResponse Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(OrderResponseResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.schema')),
				description:
					'Identifiers assigned to this order. The identifiers are usually assigned by the system responding to the order, but they may be provided or added to by other systems.',
			},
			request: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description: 'A reference to the order that this is in response to.',
			},
			date: {
				type: DateTimeScalar,
				description:
					'The date and time at which this order response was made (created/posted).',
			},
			_date: {
				type: require('./element.schema'),
				description:
					'The date and time at which this order response was made (created/posted).',
			},
			who: {
				type: require('./reference.schema'),
				description:
					'The person, organization, or device credited with making the response.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/order-status
			orderStatus: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'What this response says about the status of the original order.',
			},
			_orderStatus: {
				type: require('./element.schema'),
				description:
					'What this response says about the status of the original order.',
			},
			description: {
				type: GraphQLString,
				description:
					'Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.',
			},
			fulfillment: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'Links to resources that provide details of the outcome of performing the order; e.g. Diagnostic Reports in a response that is made to an order that referenced a diagnostic order.',
			},
		}),
});
