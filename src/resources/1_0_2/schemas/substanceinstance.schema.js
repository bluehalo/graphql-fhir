const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Substance.instance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceInstance',
	description: 'Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'Identifier associated with the package/container (usually a label affixed directly).'
		},
		expiry: {
			type: DateTimeScalar,
			description: 'When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.'
		},
		_expiry: {
			type: require('./element.schema'),
			description: 'When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The amount of the substance.'
		}
	})
});
