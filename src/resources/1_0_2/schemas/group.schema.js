const CodeScalar = require('../scalars/code.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let GroupResourceType = new GraphQLEnumType({
	name: 'GroupResourceType',
	values: {
		Group: { value: 'Group' },
	},
});

/**
 * @name exports
 * @summary Group Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Group',
	description: 'Base StructureDefinition for Group Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(GroupResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.schema')),
				description: 'A unique business identifier for this group.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/group-type
			type: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'Identifies the broad classification of the kind of resources the group includes.',
			},
			_type: {
				type: require('./element.schema'),
				description:
					'Identifies the broad classification of the kind of resources the group includes.',
			},
			actual: {
				type: new GraphQLNonNull(GraphQLBoolean),
				description:
					'If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.',
			},
			_actual: {
				type: require('./element.schema'),
				description:
					'If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.',
			},
			code: {
				type: require('./codeableconcept.schema'),
				description:
					"Provides a specific type of resource the group includes; e.g. 'cow', 'syringe', etc.",
			},
			name: {
				type: GraphQLString,
				description:
					'A label assigned to the group for human identification and communication.',
			},
			_name: {
				type: require('./element.schema'),
				description:
					'A label assigned to the group for human identification and communication.',
			},
			quantity: {
				type: UnsignedIntScalar,
				description:
					'A count of the number of resource instances that are part of the group.',
			},
			_quantity: {
				type: require('./element.schema'),
				description:
					'A count of the number of resource instances that are part of the group.',
			},
			characteristic: {
				type: new GraphQLList(require('./groupcharacteristic.schema')),
				description: 'Identifies the traits shared by members of the group.',
			},
			member: {
				type: new GraphQLList(require('./groupmember.schema')),
				description:
					'Identifies the resource instances that are members of the group.',
			},
		}),
});
