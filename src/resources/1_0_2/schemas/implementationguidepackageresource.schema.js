const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ImplementationGuide.package.resource Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuidePackageResource',
	description:
		'A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/guide-resource-purpose
			purpose: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'Why the resource is included in the guide.',
			},
			_purpose: {
				type: require('./element.schema'),
				description: 'Why the resource is included in the guide.',
			},
			name: {
				type: GraphQLString,
				description:
					'A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).',
			},
			_name: {
				type: require('./element.schema'),
				description:
					'A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).',
			},
			description: {
				type: GraphQLString,
				description:
					'A description of the reason that a resource has been included in the implementation guide.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'A description of the reason that a resource has been included in the implementation guide.',
			},
			acronym: {
				type: GraphQLString,
				description:
					'A short code that may be used to identify the resource throughout the implementation guide.',
			},
			_acronym: {
				type: require('./element.schema'),
				description:
					'A short code that may be used to identify the resource throughout the implementation guide.',
			},
			sourceUri: {
				type: new GraphQLNonNull(UriScalar),
				description: 'Where this resource is found.',
			},
			_sourceUri: {
				type: require('./element.schema'),
				description: 'Where this resource is found.',
			},
			sourceReference: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description: 'Where this resource is found.',
			},
			exampleFor: {
				type: require('./reference.schema'),
				description:
					'Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.',
			},
		}),
});
