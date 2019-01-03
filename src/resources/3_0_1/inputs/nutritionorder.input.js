const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let NutritionOrderResourceInputType = new GraphQLEnumType({
	name: 'NutritionOrderResourceInputType',
	values: {
		NutritionOrder: { value: 'NutritionOrder' },
	},
});

/**
 * @name exports
 * @summary NutritionOrder Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrder_Input',
	description: 'Base StructureDefinition for NutritionOrder Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(NutritionOrderResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description:
					'Identifiers assigned to this order by the order sender or by the order receiver.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/nutrition-request-status
			status: {
				type: CodeScalar,
				description: 'The workflow status of the nutrition order/request.',
			},
			_status: {
				type: require('./element.input'),
				description: 'The workflow status of the nutrition order/request.',
			},
			patient: {
				type: new GraphQLNonNull(require('./reference.input')),
				description:
					'The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.',
			},
			encounter: {
				type: require('./reference.input'),
				description:
					'An encounter that provides additional information about the healthcare context in which this request is made.',
			},
			dateTime: {
				type: new GraphQLNonNull(DateTimeScalar),
				description:
					'The date and time that this nutrition order was requested.',
			},
			_dateTime: {
				type: require('./element.input'),
				description:
					'The date and time that this nutrition order was requested.',
			},
			orderer: {
				type: require('./reference.input'),
				description:
					'The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.',
			},
			allergyIntolerance: {
				type: new GraphQLList(require('./reference.input')),
				description:
					'A link to a record of allergies or intolerances  which should be included in the nutrition order.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-diet
			foodPreferenceModifier: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/food-type
			excludeFoodModifier: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.',
			},
			oralDiet: {
				type: require('./nutritionorderoraldiet.input'),
				description: 'Diet given orally in contrast to enteral (tube) feeding.',
			},
			supplement: {
				type: new GraphQLList(require('./nutritionordersupplement.input')),
				description:
					"Oral nutritional products given in order to add further nutritional value to the patient's diet.",
			},
			enteralFormula: {
				type: require('./nutritionorderenteralformula.input'),
				description:
					'Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.',
			},
		}),
});
