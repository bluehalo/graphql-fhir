const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let OrderResponseResourceInputType = new GraphQLEnumType({
	name: 'OrderResponseResourceInputType',
	values: {
		OrderResponse: { value: 'OrderResponse' }
	}
});

/**
 * @name exports
 * @summary OrderResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OrderResponse_Input',
	description: 'Base StructureDefinition for OrderResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(OrderResponseResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifiers assigned to this order. The identifiers are usually assigned by the system responding to the order, but they may be provided or added to by other systems.'
		},
		request: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to the order that this is in response to.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date and time at which this order response was made (created/posted).'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date and time at which this order response was made (created/posted).'
		},
		who: {
			type: require('./reference.input'),
			description: 'The person, organization, or device credited with making the response.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/order-status
		orderStatus: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'What this response says about the status of the original order.'
		},
		_orderStatus: {
			type: require('./element.input'),
			description: 'What this response says about the status of the original order.'
		},
		description: {
			type: GraphQLString,
			description: 'Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.'
		},
		fulfillment: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Links to resources that provide details of the outcome of performing the order; e.g. Diagnostic Reports in a response that is made to an order that referenced a diagnostic order.'
		}
	})
});
