const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary NutritionOrder Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrder',
	description:
		'A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'NutritionOrder_Enum_schema',
					values: { NutritionOrder: { value: 'NutritionOrder' } },
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifiers assigned to this order by the order sender or by the order receiver.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.',
		},
		_instantiates: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.',
		},
		instantiates: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The workflow status of the nutrition order/request.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The workflow status of the nutrition order/request.',
		},
		_intent: {
			type: require('./element.schema.js'),
			description:
				'Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain.',
		},
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain.',
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'NutritionOrderpatient_patient_Union',
					description:
						'The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description:
				'The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'NutritionOrderencounter_encounter_Union',
				description:
					'An encounter that provides additional information about the healthcare context in which this request is made.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'An encounter that provides additional information about the healthcare context in which this request is made.',
		},
		_dateTime: {
			type: require('./element.schema.js'),
			description: 'The date and time that this nutrition order was requested.',
		},
		dateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date and time that this nutrition order was requested.',
		},
		orderer: {
			type: new GraphQLUnionType({
				name: 'NutritionOrderorderer_orderer_Union',
				description:
					'The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.',
		},
		allergyIntolerance: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'NutritionOrderallergyIntolerance_allergyIntolerance_Union',
					description:
						'A link to a record of allergies or intolerances  which should be included in the nutrition order.',
					types: () => [require('./allergyintolerance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'AllergyIntolerance') {
							return require('./allergyintolerance.schema.js');
						}
					},
				}),
			),
			description:
				'A link to a record of allergies or intolerances  which should be included in the nutrition order.',
		},
		foodPreferenceModifier: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.',
		},
		excludeFoodModifier: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'This modifier is used to convey Order-specific modifier about the type of oral food or oral fluids that should not be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.',
		},
		oralDiet: {
			type: require('./nutritionorderoraldiet.schema.js'),
			description: 'Diet given orally in contrast to enteral (tube) feeding.',
		},
		supplement: {
			type: new GraphQLList(require('./nutritionordersupplement.schema.js')),
			description:
				"Oral nutritional products given in order to add further nutritional value to the patient's diet.",
		},
		enteralFormula: {
			type: require('./nutritionorderenteralformula.schema.js'),
			description:
				'Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Comments made about the {{title}} by the requester, performer, subject or other participants.',
		},
	}),
});
