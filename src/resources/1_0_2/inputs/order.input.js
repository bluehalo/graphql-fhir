const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Order Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Order_Input',
	description: 'Base StructureDefinition for Order Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifiers assigned to this order by the orderer or by the receiver.'
		},
		date: {
			type: DateTimeScalar,
			description: 'When the order was made.'
		},
		_date: {
			type: require('./element.input'),
			description: 'When the order was made.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Patient this order is about.'
		},
		source: {
			type: require('./reference.input'),
			description: 'Who initiated the order.'
		},
		target: {
			type: require('./reference.input'),
			description: 'Who is intended to fulfill the order.'
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Text - why the order was made.'
		},
		reasonReference: {
			type: require('./reference.input'),
			description: 'Text - why the order was made.'
		},
		when: {
			type: require('./orderwhen.input'),
			description: 'When order should be fulfilled.'
		},
		detail: {
			type: new GraphQLList(new GraphQLNonNull(require('./reference.input'))),
			description: 'What action is being ordered.'
		}
	})
});
