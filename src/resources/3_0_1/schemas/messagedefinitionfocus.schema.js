const CodeScalar = require('../scalars/code.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary MessageDefinition.focus Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageDefinitionFocus',
	description:
		'Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
			code: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The kind of resource that must be the focus for this message.',
			},
			_code: {
				type: require('./element.schema'),
				description:
					'The kind of resource that must be the focus for this message.',
			},
			profile: {
				type: require('./reference.schema'),
				description:
					'A profile that reflects constraints for the focal resource (and potentially for related resources).',
			},
			min: {
				type: UnsignedIntScalar,
				description:
					'Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
			},
			_min: {
				type: require('./element.schema'),
				description:
					'Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
			},
			max: {
				type: GraphQLString,
				description:
					'Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
			},
			_max: {
				type: require('./element.schema'),
				description:
					'Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.',
			},
		}),
});
