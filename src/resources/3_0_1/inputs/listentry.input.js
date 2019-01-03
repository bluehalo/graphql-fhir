const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLBoolean, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary List.entry Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ListEntry_Input',
	description: 'Entries in this list.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/list-item-flag
		flag: {
			type: require('./codeableconcept.input'),
			description: 'The flag allows the system constructing the list to indicate the role and significance of the item in the list.'
		},
		deleted: {
			type: GraphQLBoolean,
			description: 'True if this item is marked as deleted in the list.'
		},
		_deleted: {
			type: require('./element.input'),
			description: 'True if this item is marked as deleted in the list.'
		},
		date: {
			type: DateTimeScalar,
			description: 'When this item was added to the list.'
		},
		_date: {
			type: require('./element.input'),
			description: 'When this item was added to the list.'
		},
		item: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to the actual resource from which data was derived.'
		}
	})
});
