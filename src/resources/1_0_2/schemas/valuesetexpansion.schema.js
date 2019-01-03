const UriScalar = require('../scalars/uri.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ValueSet.expansion Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetExpansion',
	description:
		"A value set can also be 'expanded', where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.",
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			identifier: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.',
			},
			_identifier: {
				type: require('./element.schema'),
				description:
					'An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.',
			},
			timestamp: {
				type: new GraphQLNonNull(DateTimeScalar),
				description:
					'The time at which the expansion was produced by the expanding system.',
			},
			_timestamp: {
				type: require('./element.schema'),
				description:
					'The time at which the expansion was produced by the expanding system.',
			},
			total: {
				type: GraphQLInt,
				description:
					'The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.',
			},
			_total: {
				type: require('./element.schema'),
				description:
					'The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.',
			},
			offset: {
				type: GraphQLInt,
				description:
					'If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.',
			},
			_offset: {
				type: require('./element.schema'),
				description:
					'If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.',
			},
			parameter: {
				type: new GraphQLList(require('./valuesetexpansionparameter.schema')),
				description:
					'A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.',
			},
			contains: {
				type: new GraphQLList(require('./valuesetexpansioncontains.schema')),
				description: 'The codes that are contained in the value set expansion.',
			},
		}),
});
