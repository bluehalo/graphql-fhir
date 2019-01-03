const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let SubstanceResourceInputType = new GraphQLEnumType({
	name: 'SubstanceResourceInputType',
	values: {
		Substance: { value: 'Substance' },
	},
});

/**
 * @name exports
 * @summary Substance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Substance_Input',
	description: 'Base StructureDefinition for Substance Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(SubstanceResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description: 'Unique identifier for the substance.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/substance-category
			category: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
			code: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description: 'A code (or set of codes) that identify this substance.',
			},
			description: {
				type: GraphQLString,
				description:
					'A description of the substance - its appearance, handling requirements, and other usage notes.',
			},
			_description: {
				type: require('./element.input'),
				description:
					'A description of the substance - its appearance, handling requirements, and other usage notes.',
			},
			instance: {
				type: new GraphQLList(require('./substanceinstance.input')),
				description:
					'Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.',
			},
			ingredient: {
				type: new GraphQLList(require('./substanceingredient.input')),
				description: 'A substance can be composed of other substances.',
			},
		}),
});
