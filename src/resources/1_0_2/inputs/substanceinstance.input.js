const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Substance.instance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubstanceInstance_Input',
	description:
		'Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			identifier: {
				type: require('./identifier.input'),
				description:
					'Identifier associated with the package/container (usually a label affixed directly).',
			},
			expiry: {
				type: DateTimeScalar,
				description:
					'When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.',
			},
			_expiry: {
				type: require('./element.input'),
				description:
					'When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.',
			},
			quantity: {
				type: require('./quantity.input'),
				description: 'The amount of the substance.',
			},
		}),
});
