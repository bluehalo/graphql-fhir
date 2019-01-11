const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Medication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Medication',
	description: 'Base StructureDefinition for Medication Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Medication_Enum_schema',
					values: { Medication: { value: 'Medication' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'A code to indicate if the medication is in active use.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-status
		status: {
			type: CodeScalar,
			description: 'A code to indicate if the medication is in active use.',
		},
		_isBrand: {
			type: require('./element.schema.js'),
			description:
				'Set to true if the item is attributable to a specific manufacturer.',
		},
		isBrand: {
			type: GraphQLBoolean,
			description:
				'Set to true if the item is attributable to a specific manufacturer.',
		},
		_isOverTheCounter: {
			type: require('./element.schema.js'),
			description:
				'Set to true if the medication can be obtained without an order from a prescriber.',
		},
		isOverTheCounter: {
			type: GraphQLBoolean,
			description:
				'Set to true if the medication can be obtained without an order from a prescriber.',
		},
		manufacturer: {
			type: new GraphQLUnionType({
				name: 'Medicationmanufacturer_manufacturer_Union',
				description:
					'Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-form-codes
		form: {
			type: require('./codeableconcept.schema.js'),
			description: 'Describes the form of the item.  Powder; tablets; capsule.',
		},
		ingredient: {
			type: new GraphQLList(require('./medicationingredient.schema.js')),
			description:
				'Identifies a particular constituent of interest in the product.',
		},
		package: {
			type: require('./medicationpackage.schema.js'),
			description: 'Information that only applies to packages (not products).',
		},
		image: {
			type: new GraphQLList(require('./attachment.schema.js')),
			description: 'Photo(s) or graphic representation(s) of the medication.',
		},
	}),
});
