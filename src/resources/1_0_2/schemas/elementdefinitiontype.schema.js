const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ElementDefinition.type Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionType',
	description:
		'The data type or resource that the value of this element is permitted to be.',
	fields: () =>
		extendSchema(require('./element.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
			code: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'Name of Data type or Resource that is a(or the) type used for this element.',
			},
			_code: {
				type: require('./element.schema'),
				description:
					'Name of Data type or Resource that is a(or the) type used for this element.',
			},
			profile: {
				type: new GraphQLList(UriScalar),
				description:
					'Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
			},
			_profile: {
				type: require('./element.schema'),
				description:
					'Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-aggregation-mode
			aggregation: {
				type: new GraphQLList(CodeScalar),
				description:
					'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.',
			},
			_aggregation: {
				type: require('./element.schema'),
				description:
					'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.',
			},
		}),
});
