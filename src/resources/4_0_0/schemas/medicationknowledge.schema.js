const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary MedicationKnowledge Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationKnowledge',
	description:
		'Information about a medication that is used to support knowledge.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationKnowledge_Enum_schema',
					values: { MedicationKnowledge: { value: 'MedicationKnowledge' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.',
		},
		status: {
			type: CodeScalar,
			description:
				'A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.',
		},
		manufacturer: {
			type: new GraphQLUnionType({
				name: 'MedicationKnowledgemanufacturer_manufacturer_Union',
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
		doseForm: {
			type: require('./codeableconcept.schema.js'),
			description: 'Describes the form of the item.  Powder; tablets; capsule.',
		},
		amount: {
			type: require('./quantity.schema.js'),
			description:
				'Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).',
		},
		_synonym: {
			type: require('./element.schema.js'),
			description:
				'Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.',
		},
		synonym: {
			type: new GraphQLList(GraphQLString),
			description:
				'Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.',
		},
		relatedMedicationKnowledge: {
			type: new GraphQLList(
				require('./medicationknowledgerelatedmedicationknowledge.schema.js'),
			),
			description: 'Associated or related knowledge about a medication.',
		},
		associatedMedication: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicationKnowledgeassociatedMedication_associatedMedication_Union',
					description:
						'Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).',
					types: () => [require('./medication.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
					},
				}),
			),
			description:
				'Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).',
		},
		productType: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).',
		},
		monograph: {
			type: new GraphQLList(
				require('./medicationknowledgemonograph.schema.js'),
			),
			description: 'Associated documentation about the medication.',
		},
		ingredient: {
			type: new GraphQLList(
				require('./medicationknowledgeingredient.schema.js'),
			),
			description:
				'Identifies a particular constituent of interest in the product.',
		},
		_preparationInstruction: {
			type: require('./element.schema.js'),
			description: 'The instructions for preparing the medication.',
		},
		preparationInstruction: {
			type: GraphQLString,
			description: 'The instructions for preparing the medication.',
		},
		intendedRoute: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The intended or approved route of administration.',
		},
		cost: {
			type: new GraphQLList(require('./medicationknowledgecost.schema.js')),
			description: 'The price of the medication.',
		},
		monitoringProgram: {
			type: new GraphQLList(
				require('./medicationknowledgemonitoringprogram.schema.js'),
			),
			description: 'The program under which the medication is reviewed.',
		},
		administrationGuidelines: {
			type: new GraphQLList(
				require('./medicationknowledgeadministrationguidelines.schema.js'),
			),
			description: 'Guidelines for the administration of the medication.',
		},
		medicineClassification: {
			type: new GraphQLList(
				require('./medicationknowledgemedicineclassification.schema.js'),
			),
			description:
				'Categorization of the medication within a formulary or classification system.',
		},
		packaging: {
			type: require('./medicationknowledgepackaging.schema.js'),
			description: 'Information that only applies to packages (not products).',
		},
		drugCharacteristic: {
			type: new GraphQLList(
				require('./medicationknowledgedrugcharacteristic.schema.js'),
			),
			description:
				'Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.',
		},
		contraindication: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicationKnowledgecontraindication_contraindication_Union',
					description:
						'Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).',
					types: () => [require('./detectedissue.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DetectedIssue') {
							return require('./detectedissue.schema.js');
						}
					},
				}),
			),
			description:
				'Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).',
		},
		regulatory: {
			type: new GraphQLList(
				require('./medicationknowledgeregulatory.schema.js'),
			),
			description: 'Regulatory information about a medication.',
		},
		kinetics: {
			type: new GraphQLList(require('./medicationknowledgekinetics.schema.js')),
			description:
				'The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.',
		},
	}),
});
