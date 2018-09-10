const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let MedicationResourceType = new GraphQLEnumType({
	name: 'MedicationResourceType',
	values: {
		Medication: { value: 'Medication' }
	}
});

/**
 * @name exports
 * @summary Medication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Medication',
	description: 'Base StructureDefinition for Medication Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationResourceType),
			description: 'Type of this resource.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		code: {
			type: require('./codeableconcept.schema'),
			description: 'A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-status
		status: {
			type: CodeScalar,
			description: 'A code to indicate if the medication is in active use.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'A code to indicate if the medication is in active use.'
		},
		isBrand: {
			type: GraphQLBoolean,
			description: 'Set to true if the item is attributable to a specific manufacturer.'
		},
		_isBrand: {
			type: require('./element.schema'),
			description: 'Set to true if the item is attributable to a specific manufacturer.'
		},
		isOverTheCounter: {
			type: GraphQLBoolean,
			description: 'Set to true if the medication can be obtained without an order from a prescriber.'
		},
		_isOverTheCounter: {
			type: require('./element.schema'),
			description: 'Set to true if the medication can be obtained without an order from a prescriber.'
		},
		manufacturer: {
			type: require('./reference.schema'),
			description: 'Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-form-codes
		form: {
			type: require('./codeableconcept.schema'),
			description: 'Describes the form of the item.  Powder; tablets; capsule.'
		},
		ingredient: {
			type: new GraphQLList(require('./medicationingredient.schema')),
			description: 'Identifies a particular constituent of interest in the product.'
		},
		package: {
			type: require('./medicationpackage.schema'),
			description: 'Information that only applies to packages (not products).'
		},
		image: {
			type: new GraphQLList(require('./attachment.schema')),
			description: 'Photo(s) or graphic representation(s) of the medication.'
		}
	})
});
