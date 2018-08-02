const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let MedicationResourceInputType = new GraphQLEnumType({
	name: 'MedicationResourceInputType',
	values: {
		Medication: { value: 'Medication' }
	}
});

/**
 * @name exports
 * @summary Medication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Medication_Input',
	description: 'Base StructureDefinition for Medication Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationResourceInputType),
			description: 'Type of this resource'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		code: {
			type: require('./codeableconcept.input'),
			description: 'A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.'
		},
		isBrand: {
			type: GraphQLBoolean,
			description: 'Set to true if the item is attributable to a specific manufacturer.'
		},
		_isBrand: {
			type: require('./element.input'),
			description: 'Set to true if the item is attributable to a specific manufacturer.'
		},
		manufacturer: {
			type: require('./reference.input'),
			description: 'Describes the details of the manufacturer.'
		},
		product: {
			type: require('./medicationproduct.input'),
			description: 'Information that only applies to products (not packages).'
		},
		package: {
			type: require('./medicationpackage.input'),
			description: 'Information that only applies to packages (not products).'
		}
	})
});
