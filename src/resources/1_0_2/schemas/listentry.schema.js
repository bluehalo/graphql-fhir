const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLNonNull,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary List.entry Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ListEntry',
	description: 'Entries in this list.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/list-item-flag
			flag: {
				type: require('./codeableconcept.schema'),
				description:
					'The flag allows the system constructing the list to indicate the role and significance of the item in the list.',
			},
			deleted: {
				type: GraphQLBoolean,
				description: 'True if this item is marked as deleted in the list.',
			},
			_deleted: {
				type: require('./element.schema'),
				description: 'True if this item is marked as deleted in the list.',
			},
			date: {
				type: DateTimeScalar,
				description: 'When this item was added to the list.',
			},
			_date: {
				type: require('./element.schema'),
				description: 'When this item was added to the list.',
			},
			item: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'A reference to the actual resource from which data was derived.',
			},
		}),
});
