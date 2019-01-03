const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLBoolean,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let MedicationResourceType = new GraphQLEnumType({
	name: 'MedicationResourceType',
	values: {
		Medication: { value: 'Medication' },
	},
});

/**
 * @name exports
 * @summary Medication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Medication',
	description: 'Base StructureDefinition for Medication Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(MedicationResourceType),
				description: 'Type of this resource.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
			code: {
				type: require('./codeableconcept.schema'),
				description:
					'A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.',
			},
			isBrand: {
				type: GraphQLBoolean,
				description:
					'Set to true if the item is attributable to a specific manufacturer.',
			},
			_isBrand: {
				type: require('./element.schema'),
				description:
					'Set to true if the item is attributable to a specific manufacturer.',
			},
			manufacturer: {
				type: require('./reference.schema'),
				description: 'Describes the details of the manufacturer.',
			},
			product: {
				type: require('./medicationproduct.schema'),
				description:
					'Information that only applies to products (not packages).',
			},
			package: {
				type: require('./medicationpackage.schema'),
				description:
					'Information that only applies to packages (not products).',
			},
		}),
});
